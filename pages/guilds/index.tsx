import { GetServerSideProps } from "next";
import { parseUser } from "../../utils/parse-user";
import { DiscordGuild, DiscordUser } from "../../utils/types";
import NavMenu from "../../components/navBar";
import HTMLHead from "../../components/head";
import Footer from "../../components/footer";
import { NotLoggedIn, UnknownIcon } from "../../components/utils";

export interface Props {
    user: DiscordUser,
    guilds: DiscordGuild[]
}

export default function Guild(props: Props) {
    if (!props.user) {
        return (
            <NotLoggedIn />
        );
    }

    return (
        <>
            <HTMLHead pageTitle="Dashboard" />
            <NavMenu user={props.user} />
            <div className="text-center">
                {
                    props.guilds.map(g => {
                        return (
                            <div className="outerGuild" key={g.id}>
                                <div className="text-center guild" key={g.id}>
                                    {
                                        g.iconURL == null ?
                                        <UnknownIcon color="#5865f2" size="guildIcon" className="guildIcon"/> :
                                        <img src={g.iconURL} className="guildIcon" />
                                    }
                                    <div className="viewGuildText text-center font-bold text-2xl">{g.name}</div>
                                    <p className="text-center permissionText text-light">{g.owner ? "Owner" : "Administrator"}</p>
                                    <a className="viewGuildBtn block bg-white text-black font-bold transition duration-200 shadow hover:shadow-2xl ease-in-and-out rounded-lg mx-auto mt-5 px-5 py-3 text-xl font-sans" href={`/guilds/${g.id}`}>{g.botIn ? "Go" : "Add to Server"}</a>
                                    <div className="viewGuildSep"></div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <Footer />
        </>
    );
}

export const getServerSideProps: GetServerSideProps<Props> = async function (ctx) {
    const user = await parseUser(ctx, true);
    if (!user) {
        return {
            props: {
                user: null,
                guilds: null
            }
        };
    }
    const guilds = user.guilds.filter(e => (e.permissions & 0x0000000000000008) == 8);

    return {
        props: {
            user,
            guilds
        }
    };
};