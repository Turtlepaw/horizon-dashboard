import { GetServerSideProps } from "next";
import { parseUser } from "../../utils/parse-user";
import { DiscordGuild, DiscordUser } from "../../utils/types";
import NavMenu from "../../components/navBar";
import HTMLHead from "../../components/head";

export interface Props {
    user: DiscordUser,
    guilds: DiscordGuild[]
}

export default function Guild(props: Props) {
    return (
        <>
            <HTMLHead pageTitle="Dashboard" />
            <NavMenu user={props.user} />
            <div className="text-center">
                {
                    props.guilds.map(g => 
                        <div className="text-center">
                            <div className="viewGuildText text-center font-bold text-2xl">{g.name}</div>
                            <a className="viewGuildBtn block bg-white text-black font-bold transition duration-200 shadow hover:shadow-2xl ease-in-and-out rounded-lg mx-auto mt-16 px-5 py-3 text-xl font-sans" href={`/guilds/${g.id}`}>Go</a>
                            <div className="viewGuildSep"></div>
                        </div>
                    )
                }
            </div>
        </>
    );
}

export const getServerSideProps: GetServerSideProps<Props> = async function (ctx) {
    const user = await parseUser(ctx, true);
    if (user?.guilds == null || user == null) return {
        notFound: true
    };
    const guilds = user.guilds.filter(e => (e.permissions & 0x0000000000000008) == 8);

    if (!user) {
        return {
            redirect: {
                destination: '/api/oauth',
                permanent: false,
            },
        };
    }

    return {
        props: {
            user,
            guilds
        }
    };
};