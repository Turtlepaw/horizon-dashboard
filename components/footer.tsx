import { Link } from "./navBar";

interface FooterItemOptions {
    href: string;
    name: string;
}

export function FooterItem(options: FooterItemOptions){
    return (
        <Link href={options.href} className="footerLink">{options.name}</Link>
    );
}

export default function Footer(){
    return (
        <><div className="footer text-center">
            <div className="footerCategory">
                <div className="text-2xl font-bold">Legal</div>
                <FooterItem href="/privacy" name="Privacy Policy" />
            </div>
            <div className="footerCategory">
                <div className="text-2xl font-bold">Other</div>
                <FooterItem href="/github" name="GitHub" />
                <FooterItem href="/dash-git" name="Dashboard Github" />
                <FooterItem href="/discord" name="Discord" />
            </div>
        </div>
        <div className="featureSep" />
        </>
    );
} ,
