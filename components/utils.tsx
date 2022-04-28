import { CopyBlock, dracula } from "react-code-blocks";

export function NotLoggedIn() {
    return (
        <div className="text-center">
            <div className="medSep" />
            <div className="text-5xl font-bold">Oh snap... You're not logged in!</div>
            <div className="smallSep" />
            <p className="font-semibold">It seems that you're not logged into our services! You must be logged in to access dashboard features.</p>
            <a href="/api/oauth" className="block bg-white text-black font-bold transition duration-200 shadow hover:shadow-2xl ease-in-and-out rounded-lg mx-auto mt-16 px-2 py-4 text-xl font-sans w-60">
                Log In
            </a>
        </div>
    );
}

function ErrorBase(props: {
    part: "1" | "2";
}) {
    const { part } = props;

    if (part == "1") {
        return (
            <>
                <div className="text-5xl font-bold">Oh snap... It crashed!</div>
                <p className="font-semibold">Try it again later!</p>
            </>
        );
    } else {
        return (
            <>
                <a href="/discord" className="block bg-white text-black font-bold transition duration-200 shadow hover:shadow-2xl ease-in-and-out rounded-lg mx-auto mt-16 px-2 py-4 text-xl font-sans w-60">
                    Report Bug
                </a>
            </>
        );
    }
}

export function ListItem({ children }){
    return (
        <li>
            <div className="dot"/>
            <div className="dotPadding">{children}</div>
        </li>
    );
}

export function Error(props?: {
    displayError: boolean;
    errorCode: string;
}) {
    if (props.displayError) {
        return (
            <div className="text-center">
                <ErrorBase part="1" />
                <CopyBlock
                    text={props.errorCode}
                    language="tsx"
                    theme={dracula}
                />
                <ErrorBase part="2" />
            </div>
        );
    } else {
        return (
            <>
                <ErrorBase part="1" />
                <ErrorBase part="2" />
            </>
        );
    }
}