import { Guild as dGuild, User as dUser } from "discord.js";

export interface FetchGuildsOptions {
    userID?: string;
    onlyAdmin?: boolean;
    includesBot?: boolean;
}

export enum RequestMethod {
    Get = "GET",
    Post = "POST"
}

export interface BaseAPIResponse {
    error: boolean;
    data: any;
}

export interface APIErrorResponse {
    error: boolean;
    message: string;
}

export interface APIMessageResponse {
    error: boolean;
    message: string;
}

//Discord extended typings
export interface Guild extends dGuild { };
export interface User extends dUser { };

//API Results

export interface FetchGuildsResponse extends BaseAPIResponse {
    data: Guild[];
}

export interface FetchGuildResponse extends BaseAPIResponse {
    data: Guild;
}

export interface Stats {
    guilds: number;
    users: number;
    cacheUsers: number;
    channels: number;
    uptime: number;
}

export interface FetchStatsResponse extends BaseAPIResponse {
    data: Stats;
}

export interface FetchConnectionResponse extends APIMessageResponse {};

export interface HasPermissionResponse extends BaseAPIResponse {
    data: boolean;
};

export interface IncludesBotResponse extends BaseAPIResponse {
    data: boolean;
};

//Other

export interface ExtendedGuild extends Guild {
    includesBot: boolean;
    hasPermission: boolean;
}