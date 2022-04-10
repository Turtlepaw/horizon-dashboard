import { GetServerSideProps } from "next";
import Footer from "../../components/footer";
import HTMLHead from "../../components/head";
import NavMenu, { Props } from "../../components/navBar";
import { parseUser } from "../../utils/parse-user";

export default function Privacy(props: Props){
    return (
        <>
            <HTMLHead pageTitle="Privacy" />
            <NavMenu user={props.user} />
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