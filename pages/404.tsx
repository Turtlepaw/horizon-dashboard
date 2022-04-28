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
            <h1 className="font-bold text-center text-extralarge text-yellow-400 inline pr-10 pl-80">4</h1>
            <h1 className="font-bold text-center text-extralarge text-blurple inline pr-10">0</h1>
            <h1 className="font-bold text-center text-extralarge text-yellow-400 inline pr-10">4</h1>
            <p className="font-medium text-center text-3xl">That page it not on our servers! That's all we know.</p>
        </>
    );
}