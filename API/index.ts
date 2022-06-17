import fetch from "node-fetch";
import { config } from "../utils/config";
import { Logger } from "./logger";
import { ExtendedGuild, FetchGuildResponse, FetchGuildsOptions, FetchGuildsResponse, FetchStatsResponse, HasPermissionResponse, IncludesBotResponse, RequestMethod, Stats } from "./typings";
const { apiURL: AppURL, apiKey } = config;

//ToDo:
//Add typings for API results
//Add more fetching and stuff

export class API {
    private async request(URL: string, method: RequestMethod, q?: object) {
        try {
            Logger.addError(`Requesting "${URL}"...`);
            const formattedQuery = q == null ? "" : ("?" + new URLSearchParams({
                ...q
            }).toString());

            return (await fetch(
                AppURL + URL + formattedQuery, {
                method: method.toUpperCase(),
                headers: {
                    'Authorization': apiKey
                }
            }
            ))
        } catch {
            Logger.addError("Error fetching data...");
            return null;
        }
    }

    async fetchGuilds(options?: FetchGuildsOptions) {
        Logger.addError("Fetching all guilds...");

        const guilds = await this.request("/guilds", RequestMethod.Get);
        const guildData: FetchGuildsResponse = await guilds.json();

        if (options != null && options?.onlyAdmin) {
            const g: FetchGuildsResponse = await guilds.json();
            return g.data.filter(async guild => {
                const check: Promise<HasPermissionResponse> = (await this.request(`/hasPermission/${guild.id}`, RequestMethod.Get, {
                    userID: options.userID
                })).json();

                return (await check).data;
            });
        } else if (options != null && options?.includesBot) {
            const g: FetchGuildsResponse = await guilds.json();
            return g.data.filter(async guild => {
                const check: Promise<IncludesBotResponse> = (await this.request(`/includesBot/${guild.id}`, RequestMethod.Get)).json();

                return (await check).data;
            });
        };

        return guildData.data;
    }

    async includesBot(guildId: string) {
        Logger.addError("Checking if guild includes bot...");
        const includesBot = await this.request(`/includesBot/${guildId}`, RequestMethod.Get);
        const includesBotData: IncludesBotResponse = await includesBot.json();

        return includesBotData.data;
    }

    async hasPermission(guildId: string, userId: string) {
        Logger.addError("Checking if user has permission...");
        const hasPermission = await this.request(`/hasPermission/${guildId}`, RequestMethod.Get, {
            userID: userId
        });
        const hasPermissionData: HasPermissionResponse = await hasPermission.json();

        return hasPermissionData.data;
    }

    async fetchGuild(guildId: string, userId: string): Promise<ExtendedGuild> {
        Logger.addError("Fetching guild...");
        const guild = await this.request(`/guild/${guildId}`, RequestMethod.Get);
        const guildData: FetchGuildResponse = await guild.json();

        //@ts-expect-error
        return {
            ...guildData.data,
            includesBot: await this.includesBot(guildId),
            hasPermission: await this.hasPermission(guildId, userId)
        };
    }

    async fetchStats(): Promise<Stats> {
        Logger.addError("Fetching stats...");
        const stats = await this.request("/stats", RequestMethod.Get);

        return await stats.json();
    }
}

export default new API();