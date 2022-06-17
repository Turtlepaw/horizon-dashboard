import { GetServerSideProps } from "next";
import { DiscordUser } from "../utils/types";
import { parseUser } from "../utils/parse-user";
import NavMenu, { Link } from "../components/navBar";
import Head from "../components/head";
import Footer from "../components/footer";

interface Props {
    user: DiscordUser;
}

export default function Stats(props: Props) {
    return (
        <>
            <Head pageTitle="Stats" />
            <NavMenu user={props.user} />
            <div className="text-center">
                <h1 className="font-bold text-4xl pb-1">10+ Features</h1>
                <p className="text-light">Check out <strong>all</strong> Horizon's features.</p>
            </div>
            <div className="featureList">
                <div className="outerFeatureCard">
                    <div className="feature">
                        <div className="featureIcon">
                            <img src="features/embed.svg" className="featureIconImage mx-auto pt-2 featureSVG" />
                        </div>
                        <div className="featureText">
                            <h1 className="featureTitle font-bold text-2xl">Custom Embeds</h1>
                            <p className="featureDescription text-light">
                                Share & create custom embed messages with the bot.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="outerFeatureCard">
                    <div className="feature">
                        <div className="featureIcon">
                            <img src="features/embed.svg" className="featureIconImage mx-auto pt-2 featureSVG" />
                        </div>
                        <div className="featureText">
                            <h1 className="featureTitle font-bold text-2xl">Free</h1>
                            <p className="featureDescription text-light">
                                Horizon is %100 free. We won't ever make you pay. {"\u200B"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export const getServerSideProps: GetServerSideProps<Props> = async function (ctx) {
    const user = await parseUser(ctx);
    return { props: { user } };
};