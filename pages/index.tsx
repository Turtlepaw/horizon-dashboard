import { GetServerSideProps } from "next";
import { DiscordUser } from "../utils/types";
import { parseUser } from "../utils/parse-user";
import NavMenu from "../components/navBar";
import Head from "../components/head";

interface Props {
  user: DiscordUser;
}

export default function Index(props: Props) {
  return (
    <>
      <Head pageTitle="Home"/>
      <NavMenu user={props.user} />
      <div className="text-center">
        <div>

        </div>
        <h1 className="text-3xl font-bold underline">
          Hey, {props.user != null ? `${props.user.username}#${props.user.discriminator}` : "Not Logged In"}
        </h1>
      </div></>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async function (ctx) {
  const user = await parseUser(ctx);
  const isDashboardPage = ["/guilds", "/dashboard"].includes(ctx.resolvedUrl);

  if (!user && isDashboardPage) {
    return {
      redirect: {
        destination: "/api/oauth",
        permanent: false,
      },
    };
  }

  return { props: { user } };
};
