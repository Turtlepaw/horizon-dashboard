import { GetServerSideProps } from "next";
import { AppProps } from "next/app";
import { Props } from "../components/navBar";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}