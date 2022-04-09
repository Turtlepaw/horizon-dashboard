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
      </Head>
    </div>
  );
}