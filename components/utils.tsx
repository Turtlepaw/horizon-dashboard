import { CopyBlock, dracula } from "react-code-blocks";
import { HexColor } from "../utils/types";

export function NotLoggedIn(props: {
    pageURL: string
}) {
    const { pageURL } = props;
    return (
        <div className="text-center">
            <div className="medSep" />
            <div className="text-5xl font-bold">Oh snap... You're not logged in!</div>
            <div className="smallSep" />
            <p className="font-semibold text-light">It seems that you're not logged into our services! You must be logged in to access dashboard features.</p>
            <a href={`/api/oauth?r=${pageURL}`} className="block bg-white text-black font-bold transition duration-200 shadow hover:shadow-2xl ease-in-and-out rounded-lg mx-auto mt-16 px-2 py-4 text-xl font-sans w-60">
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
                <p className="font-semibold text-light">Try it again later!</p>
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
            *
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

interface SVGProps {
    size?: "small" | "medium" | "large" | "semiLarge" | "semiMedium" | "reallyLarge" | "superLarge" | "guildIcon";
    color?: HexColor | string;
    className?: string;
}

export function ExternalIcon(props?: SVGProps) {
    return (
        <svg className={`icon outbound svg-${props.size} ${props.className == null ? "" : props.className}`} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15">
            <path fill={props.color || "currentColor"} d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
            <polygon fill={props.color || "currentColor"} points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
        </svg>
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

interface SomeSVGProps {
    color?: HexColor | string;
}

export function UnknownIcon(props: SVGProps){
    return (
        <svg className={`svg-${props.size} ${props.className == null ? "" : props.className}`} fill={props.color || "none"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c5.523 0 10 4.478 10 10s-4.477 10-10 10S2 17.522 2 12 6.477 2 12 2Zm0 13.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-8.75A2.75 2.75 0 0 0 9.25 9.5a.75.75 0 0 0 1.493.102l.007-.102a1.25 1.25 0 1 1 2.5 0c0 .539-.135.805-.645 1.332l-.135.138c-.878.878-1.22 1.447-1.22 2.53a.75.75 0 0 0 1.5 0c0-.539.135-.805.645-1.332l.135-.138c.878-.878 1.22-1.447 1.22-2.53A2.75 2.75 0 0 0 12 6.75Z" fill="#5865f2"/></svg>
    );
}

export function ImageIcon(props: SVGProps){
    return (
        <svg className={`svg-${props.size} ${props.className == null ? "" : props.className}`} fill={props.color || "none"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6.25A3.25 3.25 0 0 1 6.25 3h9a3.25 3.25 0 0 1 3.25 3.25v9c0 .646-.189 1.248-.514 1.755l-5.692-5.376a2.25 2.25 0 0 0-3.09 0l-5.69 5.375A3.235 3.235 0 0 1 3 15.25v-9Zm10.747 2.746a1.248 1.248 0 1 0 0-2.496 1.248 1.248 0 0 0 0 2.496Z" fill="#5865f2"/><path d="m11.264 12.72 5.642 5.327a3.235 3.235 0 0 1-1.656.453h-9a3.235 3.235 0 0 1-1.656-.453l5.64-5.327a.75.75 0 0 1 1.03 0Z" fill="#5865f2"/><path d="M8.749 21a3.247 3.247 0 0 1-2.74-1.5h9.74a3.75 3.75 0 0 0 3.75-3.75V6.011a3.247 3.247 0 0 1 1.5 2.74v7c0 2.899-2.35 5.25-5.25 5.25h-7Z" fill={props.color || "currentColor"}/>
        </svg>
    );
}