import { GetServerSideProps } from "next";
import { DiscordUser } from "../utils/types";
import { parseUser } from "../utils/parse-user";
import NavMenu from "../components/navBar";
import Head from "../components/head";
import Feature from "../components/feature";
import Footer from "../components/footer";
import Emojipicker from "../components/emojipicker";

interface Props {
  user: DiscordUser;
}

export default function Index(props: Props) {
  return (
    <>
      <Head pageTitle="Home" />
      <NavMenu user={props.user} />
      <div className="text-center horizonText">
        <h1 className="text-6xl font-bold">
          Introducing, Horizon
        </h1>
      </div>
      <div className="featureSep" />
      <div>
        <Feature
          name="Info on everything"
          description="Get info on the server or a user in a flash."
          num="left"
          numClass="featureGrey"
          image="/features/info.svg"
        />
        <Feature
          name="Info on everything"
          description="Get info on the server or a user in a flash."
          num="right"
          numClass="featureNone"
          image="/features/info.svg"
        />
      </div>
      <Footer />
    </>
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
