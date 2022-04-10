import { GetServerSideProps } from "next";
import { parseUser } from "../../utils/parse-user";
import { DiscordGuild, DiscordUser } from "../../utils/types";
import NavMenu from "../../components/navBar";
import HTMLHead from "../../components/head";
import Footer from "../../components/footer";

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
                        <div className="text-center" key={g.id}>
                            <div className="viewGuildText text-center font-bold text-2xl">{g.name}</div>
                            <a className="viewGuildBtn block bg-white text-black font-bold transition duration-200 shadow hover:shadow-2xl ease-in-and-out rounded-lg mx-auto mt-16 px-5 py-3 text-xl font-sans" href={`/guilds/${g.id}`}>{g.botIn ? "Go" : "Add to Server"}</a>
                            <div className="viewGuildSep"></div>
                        </div>
                    )
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
            redirect: {
                destination: '/api/oauth',
                permanent: false,
            },
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