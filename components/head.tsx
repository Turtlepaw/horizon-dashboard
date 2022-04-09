import { GetServerSideProps } from "next";
import { DiscordUser } from "../utils/types";
import { parseUser } from "../utils/parse-user";
import Head from 'next/head'

export default function HTMLHead() {
  return (
    <div>
      <Head>
        <title>Horizon - The TS built, open-source, feature-rich Discod bot</title>
        <link rel="icon" href="/ico.png" />
        <meta content="Horizon" property="og:title" />
        <meta content="The TS built, open-source, feature-rich Discod bot that does it all!" property="og:description" />
        <meta content={process.env.APP_URI} property="og:url" />
        <meta content={process.env.APP_URI + "/ico.png"} property="og:image" />
        <meta content="#5865f2" data-react-helmet="true" name="theme-color" />
      </Head>
    </div>
  );
}