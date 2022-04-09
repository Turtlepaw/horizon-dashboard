import { Collection, Permissions, PermissionString } from "discord.js";

export interface DiscordUser {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  public_flags: number;
  flags: number;
  locale: string;
  mfa_enabled: boolean;
  premium_type: number;
  avatarURL: string;
  guilds: DiscordGuild[];
}

export interface RawDiscordGuild {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: number;
  features: DiscordGuildFeatures[];
}

export interface DiscordGuild {
  id: string;
  name: string;
  icon: string;
  iconURL: string;
  owner: boolean; //if they are the owner
  permissions: number;
  features: DiscordGuildFeatures[];
}

export type DiscordGuildFeatures = "ANIMATED_BANNER"
| "ANIMATED_ICON"
| "BANNER"
| "COMMERCE"
| "COMMUNITY"
| "DISCOVERABLE"
| "FEATURABLE"
| "INVITE_SPLASH"
| "MEMBER_VERIFICATION_GATE_ENABLED"
| "MONETIZATION_ENABLED"
| "MORE_STICKERS"
| "NEWS"
| "PARTNERED"
| "PREVIEW_ENABLED"
| "PRIVATE_THREADS"
| "ROLE_ICONS"
| "SEVEN_DAY_THREAD_ARCHIVE"
| "THREE_DAY_THREAD_ARCHIVE"
| "TICKETED_EVENTS_ENABLED"
| "VANITY_URL"
| "VERIFIED"
| "VIP_REGIONS"
| "WELCOME_SCREEN_ENABLED"