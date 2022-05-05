import { Link } from "./navBar";

function GenerateLink(r: string, text: string){
    return <Link isExternal href={r}>{text}</Link>;
}

export const PRESET_LINKS = {
    DISCORD: "https://discord.gg/CfVFe46cD4",
    ADD_TO_SERVER: process.env.ADD_BOT,
    DASHBOARD_GITHUB: "https://github.com/Turtlepaw/horizon-dashboard",
    BOT_GITHUB: "https://github.com/turtlepaws-workshop/horizon"
}

export const PresetLinks = {
    SupportServer: GenerateLink(PRESET_LINKS.DISCORD, "Support Server"),
    CustomSupportServer: (txt: string) => GenerateLink(PRESET_LINKS.DISCORD, txt),
    AddToServer: GenerateLink(PRESET_LINKS.ADD_TO_SERVER, "Add to Server"),
    CustomAddToServer: (txt: string) => GenerateLink(PRESET_LINKS.ADD_TO_SERVER, txt),
    BotGithub: GenerateLink(PRESET_LINKS.BOT_GITHUB, "Github"),
    CustomBotGithub: (txt: string) => GenerateLink(PRESET_LINKS.BOT_GITHUB, txt),
    DashboardGithub: GenerateLink(PRESET_LINKS.DASHBOARD_GITHUB, "Dashboard Github"),
    CustomDashboardGithub: (txt: string) => GenerateLink(PRESET_LINKS.DASHBOARD_GITHUB, txt),
};