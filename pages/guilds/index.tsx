import { GetServerSideProps } from "next";
import { parseUser } from "../../utils/parse-user";
import { DiscordGuild, DiscordUser } from "../../utils/types";
import NavMenu from "../../components/navBar";
import HTMLHead from "../../components/head";

export interface Props {
    user: DiscordUser,
    guild: DiscordGuild
}

export default function Guild(props: Props){
    if(!props.guild){
        return (
            <div className="text-red-500 text-center centerMargin text-5xl font-bold">
                Unknown guild
                <a href="/" className="block bg-white text-black font-bold transition duration-200 shadow hover:shadow-2xl ease-in-and-out rounded-lg mx-auto mt-16 px-2 py-4 hover:text-green-500 text-xl font-sans w-60">
                    Home
                </a>
            </div>
        );
    }

    if(props.guild.permissions && 0x0000000000000008 != 8){
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
            <HTMLHead pageTitle="Dashboard"/>
            <NavMenu user={props.user}/>
            <div className="GuildImgStuff">
                <img src={props.guild.iconURL} className="guildIcon" alt={`${props.guild.name}'s Icon`} />
            </div>
            <div className="text-centertext-5xl font-bold guildName hover:underline cursor-pointer" id="title">
                {props.guild.name}
            </div>
        </>
    );
}

export const getServerSideProps: GetServerSideProps<Props> = async function (ctx) {
    const user = await parseUser(ctx, true);
    if(user?.guilds == null || user == null) return {
        notFound: true
    };
    const guild = user.guilds.find(e => e.id == ctx.query.id);
  
    if (!user) {
      return {
        redirect: {
          destination: '/api/oauth',
          permanent: false,
        },
      };
    }
  
    return { props: {
        user, guild
    } };
};