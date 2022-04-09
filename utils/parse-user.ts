import { GetServerSidePropsContext } from "next";
import { DiscordGuild, DiscordUser, RawDiscordGuild } from "./types";
import { parse } from "cookie";
import { verify } from "jsonwebtoken";
import { config } from "./config";
import fetch from "node-fetch";
import { getUser } from "../db/db";

export interface ParseError {
  error: boolean;
  message: string;
}

export function parseGuild(guild: RawDiscordGuild): DiscordGuild {
  return {
    features: guild.features,
    icon: guild.icon,
    iconURL: `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=4096`,
    id: guild.id,
    name: guild.name,
    owner: guild.owner,
    permissions: guild.permissions
  }
}

export async function parseUser(ctx: GetServerSidePropsContext, getGuilds: boolean = false): Promise<DiscordUser | null> {
  if (!ctx.req.headers.cookie) {
    return null;
  }

  const token = parse(ctx.req.headers.cookie)[config.cookieName];

  if (!token) {
    return null;
  }

  let parsedGuilds = null;

  if(getGuilds){
    const raw = await getUser({
      jwt_token: token
    });
  
    const guilds: RawDiscordGuild[] = await fetch("http://discord.com/api/users/@me/guilds", {
      headers: { Authorization: `${raw.token_type} ${raw.access_token}` },
    }).then((res) => res.json());
  
    if(!guilds || !Array.isArray(guilds)) return null;

    parsedGuilds = guilds.map(e => {
      const base = parseGuild(e);
      if(base.permissions && 0x0000000000000008 != 8) return;
      return base;
    }).filter(e => e != undefined);
  }

  try {
    let { iat, exp, ...user } = verify(token, config.jwtSecret) as DiscordUser & { iat: number; exp: number };

    return {
      ...user,
      avatarURL: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=4096`,
      guilds: parsedGuilds?.length <= 0 ? null : parsedGuilds
    };
  } catch (e) {
    console.log(e);
    return null;
  }
}
