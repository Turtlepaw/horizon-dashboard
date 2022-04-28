import { GetServerSideProps } from "next";
import { parseUser } from "../../utils/parse-user";
import { DiscordGuild, DiscordUser } from "../../utils/types";
import NavMenu from "../../components/navBar";
import HTMLHead from "../../components/head";
import Footer from "../../components/footer";
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { Error, NotLoggedIn } from "../../components/utils";

export interface Props {
    user: DiscordUser,
    guild: DiscordGuild
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function Guild(props: Props) {
    let [categories] = useState([
        {
            id: 1,
            title: "Server",
            description: "Time settings, commands, and other server related settings."
        },
        {
            id: 2,
            title: "Slash Commands (soon)",
            description: "Create custom server slash commands with multiple actions linked. (Coming soon)"
        },
        {
            id: 3,
            title: "Button Roles",
            description: "Assign custom roles to your users."
        },
        {
            id: 4,
            title: "Levels",
            description: "Allow users to get rewards for chatting!"
        }
    ])

    if(!props.user){
        return (
            <NotLoggedIn />
        );
    }

    if (!props.guild) {
        return (
            <div className="text-red-500 text-center centerMargin text-5xl font-bold">
                Unknown guild
                <a href="/" className="block bg-white text-black font-bold transition duration-200 shadow hover:shadow-2xl ease-in-and-out rounded-lg mx-auto mt-16 px-2 py-4 hover:text-green-500 text-xl font-sans w-60">
                    Home
                </a>
            </div>
        );
    }

    if ((props.guild.permissions & 0x0000000000000008) != 8) {
        return (
            <div className="text-red-500 text-center centerMargin text-5xl font-bold">
                Unauthorized access
                <a href="/" className="block bg-white text-black font-bold transition duration-200 shadow hover:shadow-2xl ease-in-and-out rounded-lg mx-auto mt-16 px-2 py-4 hover:text-green-500 text-xl font-sans w-60">
                    Home
                </a>
            </div>
        );
    }

    return (
        <>
            <HTMLHead pageTitle="Dashboard" />
            <NavMenu user={props.user} />
            <div className="GuildImgStuff">
                <img src={props.guild.iconURL} className="guildIcon" alt={`${props.guild.name}'s Icon`} />
            </div>
            <a className="text-center text-5xl font-bold hover:underline cursor-pointer" id="name" href="#name">
                <div className="text-center">
                    {props.guild.name}
                </div>
            </a>
            <p className="text-center permissionText">{props.guild.owner ? "Owner" : "Administrator"}</p>
            <div className="text-center font-bold text-6xl settingCategory bigSettingsCategory">
                Settings
            </div>
            <Footer />
        </>
    );
}

export const getServerSideProps: GetServerSideProps<Props> = async function (ctx) {
    const user = await parseUser(ctx, true);
    if(!user){
        return {
            props: {
                user: null,
                guild: null
            }
        }
    }
    const guild = user.guilds.find(e => e.id == ctx.query.id);

    if (!guild.botIn) {
        return {
            redirect: {
                destination: process.env.ADD_BOT + `&guild_id=${ctx.query.id}`,
                permanent: false
            }
        }
    }

    return {
        props: {
            user, guild
        }
    };
};