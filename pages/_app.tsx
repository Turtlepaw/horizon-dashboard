import { GetServerSideProps } from "next";
import { AppProps } from "next/app";
import { Props } from "../components/navBar";
import "../styles/index.css";
import "../styles/global.css";
import { ChakraProvider } from '@chakra-ui/react'
import theme from "../components/theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div className="poppins">
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </div>
  );
}