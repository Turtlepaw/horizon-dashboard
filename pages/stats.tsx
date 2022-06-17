import { GetServerSideProps } from "next";
import { DiscordUser } from "../utils/types";
import { parseUser } from "../utils/parse-user";
import NavMenu, { Link } from "../components/navBar";
import Head from "../components/head";
import Footer from "../components/footer";
import ReactMarkdown from "react-markdown";
import fs from "fs";
import API from "../API";
import { Stats as BotStats } from "../API/typings";
import ms from "ms";

interface Props {
    user: DiscordUser;
    stats: BotStats;
}

export default function Stats(props: Props) {
    const request = props.stats;

    return (
        <>
            <Head pageTitle="Stats" />
            <NavMenu user={props.user} />
            <div className="outerStatcard">
                <div className="text-center statCard">
                    <p className="text-5xl font-bold">{Math.round(request.guilds).toString()}</p>
                    <h1 className="text-2xl text-light pt-1">Servers</h1>
                </div>
            </div>
            <div className="outerStatcard">
                <div className="text-center statCard">
                    <p className="text-5xl font-bold">{Math.round(request.cacheUsers).toString()}</p>
                    <h1 className="text-2xl text-light pt-1">Users</h1>
                </div>
            </div>
            <div className="outerStatcard">
                <div className="text-center statCard">
                    <p className="text-5xl font-bold">{Math.round(request.channels).toString()}</p>
                    <h1 className="text-2xl text-light pt-1">Channels</h1>
                </div>
            </div>
            <div className="outerStatcard">
                <div className="text-center statCard">
                    <p className="text-5xl font-bold">{ms(request.uptime)}</p>
                    <h1 className="text-2xl text-light pt-1">Uptime</h1>
                </div>
            </div>
            <Footer />
        </>
    );
}

export const getServerSideProps: GetServerSideProps<Props> = async function (ctx) {
    const exampleStats: BotStats = {
        guilds: 498,
        cacheUsers: 3276,
        users: null,
        channels: 385,
        uptime: 5004000
    }
    const user = await parseUser(ctx);
    const stats = await API.fetchStats();
    return { props: { user, stats } };
};