import { GetServerSideProps } from "next";
import { DiscordUser } from "../utils/types";
import { parseUser } from "../utils/parse-user";
import NavMenu, { Link } from "../components/navBar";
import Head from "../components/head";
import Feature from "../components/feature";
import Footer from "../components/footer";
import Emojipicker from "../components/emojipicker";
import { FaqBox, FaqDescription, FaqTitle } from "../components/FAQ";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Center,
} from '@chakra-ui/react'
import { ExternalIcon } from "../components/utils";

interface Props {
  user: DiscordUser;
}

export default function Index(props: Props) {
  return (
    <>
      <Head pageTitle="Home" />
      <NavMenu user={props.user} />
      <div className="text-center horizonText">
        <h1 className="text-6xl font-extrabold">
          Efficiency <span className="gradientText">First</span>
        </h1>
        <Center>
          <p className="font-semibold max-w-2xl pt-5 text-2xl text-light">We, at Horizon, believe we can make server management easier, with workflows, Smart Moderation, and more.</p>
        </Center>
        <Center>
          <a className="block bg-brand text-white font-bold transition duration-200 shadow hover:shadow-2xl ease-in-and-out rounded-lg px-5 max-w-2xl mt-16 py-3 text-xl font-sans text-center" href="/beta">
            Join the beta <ExternalIcon color="white" size="semiMedium" />
          </a>
        </Center>
      </div>
      <div className="featureSep" />
      <div>
        <Feature
          name="Link Scanning"
          description="When someone sends a short link (like bit.ly) it will scan the link's redirection to see where it leads."
          num="left"
          numClass="featureGrey"
          image="/undraw/link.svg"
        />
        <Feature
          name="Advanced Auto-Moderation"
          description="Horizon will auto-scan every message to see if it has a custom banned word or if it's inappropriate."
          num="right"
          numClass="featureNone"
          image="/undraw/warning.svg"
        />
        <Feature
          name="Levels"
          description="Give rewards for your members being active. Customize your level-up message (and much more like rank image) and create a leaderboard."
          num="left"
          numClass="featureGrey"
          image="/undraw/levels.svg"
        />
        <Feature
          name="Gaming"
          description="Interact with your community via games. With various games like trivia, tic tac toe, and more!"
          num="right"
          numClass="featureNone"
          image="/undraw/game.svg"
        />
      </div>
      <div className="text-center">
        <h2 className="text-5xl font-bold">FAQ</h2>
        <FaqBox>
          <FaqTitle>
            Why can't I see my server?
          </FaqTitle>
          <FaqDescription>
            This may be because you do not have the admin permissions in the server. If you do please <Link href="/support" blurple={false}>contact us</Link> with your Guild ID.
          </FaqDescription>
        </FaqBox>
        <FaqBox>
          <FaqTitle>
            Wait... What's a "Guild?"
          </FaqTitle>
          <FaqDescription>
            A "Guild" or rather a "Server" is a community space of people or an invite-only space on Discord.
          </FaqDescription>
        </FaqBox>
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
