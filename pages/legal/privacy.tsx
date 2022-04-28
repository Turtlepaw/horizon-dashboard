import { GetServerSideProps } from "next";
import Footer from "../../components/footer";
import HTMLHead from "../../components/head";
import NavMenu, { Link, Props } from "../../components/navBar";
import { parseUser } from "../../utils/parse-user";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import { ListItem } from "../../components/utils";
import { CopyBlock, dracula } from "react-code-blocks";

export default function Privacy(props: Props) {
  return (
    <>
      <HTMLHead pageTitle="Privacy" />
      <NavMenu user={props.user} />
      <div>
        <h2 className="text-5xl font-bold text-center">Your Privacy</h2>
        <div className="smallSep"/>
        <p className="font-semibold text-center">Your privacy is important to us. That's why our code is open-source! If you're a <Link isExternal href="https://typescriptlang.org/">TypeScript</Link> coder you can review our code on our <Link href="/github" isExternal>Github</Link>.</p>
        <Accordion className="faq">
          <AccordionItem className="faqItem">
            <h2>
              <AccordionButton className="faqText">
                <Box flex='1' textAlign='left'>
                  What data do you store?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className="faqSmallText">
              <ol>
                <ListItem>Custom Embeds</ListItem>
                <ListItem>Server/Guild settings</ListItem>
                <ListItem>Your custom settings</ListItem>
                <ListItem>Warns, bans, timeouts, and other moderation features</ListItem>
                <ListItem>...</ListItem>
              </ol>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className="faqItem">
            <h2>
              <AccordionButton className="faqText">
                <Box flex='1' textAlign='left'>
                  Who sees this data?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className="faqSmallText text-center">
              Only the owner (Turtlepaw)
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className="faqItem">
            <h2>
              <AccordionButton className="faqText">
                <Box flex='1' textAlign='left'>
                  How do I delete my data?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className="faqSmallText text-center">
              Do <code>/privacy</code> and click <code>Delete Data</code> or you can <Link href="/support">contact us</Link>
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