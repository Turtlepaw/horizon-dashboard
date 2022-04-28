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

export function ListItem({ children }) {
    return (
        <li>
            <div className="dot" />
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

export function ExternalIcon() {
    return (
        <svg className="icon outbound" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>
    );
}

export interface ExternalLinkProps {
    href: string;
    blurple?: boolean;
    children: string;
    className?: string;
}

export function ExternalLink({ children, href, blurple, className }: ExternalLinkProps = {
    children: "Void Link",
    href: "/void",
    blurple: false,
    className: "text-red-600"
}) {
    return (
        <a href={href} className={className}>
            {children}
            <ExternalIcon />
        </a>
    );
}