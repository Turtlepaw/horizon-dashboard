import { GetServerSideProps } from "next";
import Footer from "../components/footer";
import HTMLHead from "../components/head";
import NavMenu from "../components/navBar";
import { parseUser } from "../utils/parse-user";
import { DiscordUser } from "../utils/types";

export default function Error404(){
    return (
        <>
            <HTMLHead pageTitle="404: Not Found"/>
            <img src="/undraw/not_found_yellow.svg" width={600} className="mx-auto centerImage" />
            <Footer />
        </>
    );
}