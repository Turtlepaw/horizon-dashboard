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
