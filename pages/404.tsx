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
            <h1 className="font-bold text-center text-extralarge">
                <span className="text-yellow-400">4</span>
                <span className="text-blurple">0</span>
                <span className="text-yellow-400">4</span>
            </h1>
            <p className="font-medium text-center text-3xl">That page it not on our servers! That's all we know.</p>
            <a className="block bg-blurple text-white font-bold transition duration-200 shadow hover:shadow-2xl ease-in-and-out rounded-lg mx-96 mt-16 py-3 text-xl font-sans text-center" href="/">Back Home</a>
        </>
    );
}