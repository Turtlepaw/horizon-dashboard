import { GetServerSidePropsContext } from "next";
import { DiscordUser } from "./types";
import { parse } from "cookie";
import { verify } from "jsonwebtoken";
import { config } from "./config";

export function parseUser(ctx: GetServerSidePropsContext): DiscordUser | null {
  if (!ctx.req.headers.cookie) {
    return null;
  }

  const token = parse(ctx.req.headers.cookie)[config.cookieName];

  if (!token) {
    return null;
  }

  try {
    let { iat, exp, ...user } = verify(token, config.jwtSecret) as DiscordUser & { iat: number; exp: number };
    user.avatarURL = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=4096`
    return user;
  } catch (e) {
    return null;
  }
}
