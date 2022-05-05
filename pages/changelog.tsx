import { GetServerSideProps } from "next";
import { DiscordUser } from "../utils/types";
import { parseUser } from "../utils/parse-user";
import NavMenu, { Link } from "../components/navBar";
import Head from "../components/head";
import Footer from "../components/footer";
import ReactMarkdown from "react-markdown";
import fs from "fs";

interface Props {
    user: DiscordUser;
    file: string;
}

export default function Index(props: Props) {
    const file = props.file;

    return (
        <>
            <Head pageTitle="Home" />
            <NavMenu user={props.user} />
            <h1 className="text-center text-3xl font-bold pb-3">Changelogs</h1>
            <p className="text-light text-center mb-10">Images, titles, and other markdown features don't work as expected<br/>This will be fixed in a future update where we will create a custom Markdown formatter package.<br/><Link href="https://npm.im/@horizon/react-markdown">Check it out (not out)</Link></p>
            <ReactMarkdown className="text-center">
                {file}
            </ReactMarkdown>
            <Footer />
        </>
    );
}

export const getServerSideProps: GetServerSideProps<Props> = async function (ctx) {
    const user = await parseUser(ctx);
    const file = fs.readFileSync("./CHANGELOG.md", {
        encoding: "utf8"
    });
    return { props: { user, file } };
};