import { GetServerSideProps } from "next";
import { DiscordUser } from "../utils/types";
import { parseUser } from "../utils/parse-user";
import Head from 'next/head'

export interface HeadOptions {
  pageTitle: string;
}

export default function HTMLHead(options: HeadOptions) {
  const embedOptions = {
    name: `Horizon`,
    description: "The TS built, open-source, feature-rich Discod bot that does it all!",
    url: process.env.APP_URI,
    icon: process.env.APP_URI + "/ico.png",
    color: "#5865f2",
    type: "website"
  }
  return (
    <div>
      <Head>
        <title>Horizon - {options.pageTitle}</title>
        <link rel="icon" href="/ico.png" />
        <meta content={embedOptions.name} property="og:title" />
        <meta content={embedOptions.description} property="og:description" />
        <meta content={embedOptions.url} property="og:url" />
        <meta content={embedOptions.icon} property="og:image" />
        <meta content={embedOptions.color} data-react-helmet="true" name="theme-color" />
        <meta content={embedOptions.type} property="og:type" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={embedOptions.url} />
        <meta property="twitter:title" content={embedOptions.name} />
        <meta property="twitter:description" content={embedOptions.description} />
        <meta property="twitter:image" content={embedOptions.icon}></meta>
      </Head>
    </div>
  );
}