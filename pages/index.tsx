import { GetServerSideProps } from "next";
import { DiscordUser } from "../utils/types";
import { parseUser } from "../utils/parse-user";
import NavMenu, { Link } from "../components/navBar";
import Head from "../components/head";
import Feature from "../components/feature";
import Footer from "../components/footer";
import Emojipicker from "../components/emojipicker";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
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
        <h1 className="text-6xl font-bold">
          Introducing, Horizon
        </h1>
        <p className="font-normal pt-5 text-2xl text-light">Horizon is a TS-built, feature-rich, open-source, multipurpose bot..</p>
        <a className="block bg-blurple text-white font-bold transition duration-200 shadow hover:shadow-2xl ease-in-and-out rounded-lg mx-96 mt-16 py-3 text-xl font-sans text-center" href="/beta">
          Join the Beta <ExternalIcon color="white" size="semiMedium" />
        </a>
      </div>
      <div className="featureSep" />
      <div className="pb-10">
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
        <div className={"feature flex-col sm:flex-row text-center sm:text-left featureGrey"}>
          <div className="sm:w-1/2 sm:p-8 feature-header">
            <h1 className="font-bold text-4xl mb-3">Not sure?</h1>
            <p className="font-500 text-lg">Check out the full list of features and the stats.</p>

            <div className="mt-10">
              <a className="mr-5 addToServer inline bg-blurple text-white font-bold transition duration-200 shadow hover:shadow-2xl ease-in-and-out rounded-lg mx-auto mt-16 px-5 py-3 text-xl font-sans" href="/stats">
                Stats
              </a>
              <a className="addToServer inline bg-blurple text-white font-bold transition duration-200 shadow hover:shadow-2xl ease-in-and-out rounded-lg mx-auto mt-16 px-5 py-3 text-xl font-sans" href="/features">
                Features
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-5xl font-bold">FAQ</h2>
        <Accordion className="faq">
          <AccordionItem className="faqItem">
            <h2>
              <AccordionButton className="faqText">
                <Box flex='1' textAlign='left'>
                  Why is my server not showing up?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className="faqSmallText">
              This may be because you do not have the admin permissions in the guild! If you do please <Link href="/support">contact us</Link> with your user ID.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className="faqItem">
            <h2>
              <AccordionButton className="faqText">
                <Box flex='1' textAlign='left'>
                  How do I add the bot?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className="faqSmallText">
              You can invite by clicking <Link href="/invite">here</Link>.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
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
