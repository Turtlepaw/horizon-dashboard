import { GetServerSideProps } from "next";
import { AppProps } from "next/app";
import { Props } from "../components/navBar";
import "../styles/index.css";
import "../styles/global.css";
import { ChakraProvider } from '@chakra-ui/react'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    //----------------------------------------------------------------------------------------
    //✅ Fixed: Add a div above `<ChakraProvider/>` that contains the color.
    //💟 Stackoverflow (alternative solution): https://stackoverflow.com/a/71187688/15751555
    //🔨 Fix: Chakra resets background.
    //🔎 Bug: changes background color when component activated.
    //----------------------------------------------------------------------------------------
    <div className="background poppins">
      <ChakraProvider
        cssVarsRoot="background-color: #36393f; color: white;"
        resetCSS={false}
      >
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  );
}