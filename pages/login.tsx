import { GetServerSideProps } from "next";
import { parseUser } from "../utils/parse-user";
import { DiscordUser } from "../utils/types";

export interface LoginPageProps {
    user?: DiscordUser
}

export default function Login(props: LoginPageProps){
    if(props.user != null){
        return (
            <div className="text-red-500">
                You're already logged in...
            </div>
        );
    }

    return (
        <div className="text-center LoginProvider text-4xl font-bold">
            <div className="bg-blurple rounded-2xl LoginProviderBox">
                <img src="discord_white.svg" className="LoginProviderImage mx-auto"/>
                <a className="hover:underline cursor-pointer LoginProviderText">
                    Login With Discord
                </a>
            </div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps<LoginPageProps> = async function (ctx) {
    const user = await parseUser(ctx);
  
    return { props: { 
        user: user || null
    } };
};