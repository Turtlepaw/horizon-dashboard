import { Link } from "./navBar";

interface FooterItemOptions {
    href: string;
    name: string;
}

export function FooterItem(options: FooterItemOptions) {
    return (
        <Link href={options.href} className="footerLink text-blurple">{options.name}</Link>
    );
}

export default function Footer() {
    return (
        <>
            <div className="footer text-center">
                <div className="footerColor p-10 pl-10">
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
                    <div className="text-sm pt-5">
                        <p className="font-medium">©️ 2022 Turtlepaw's Workshop</p>
                        <p className="text-muted">
                            Not affiliated with Discord, Inc.
                            <br />
                            Discord is a registered trademark of Discord, Inc.
                        </p>
                        <p className="font-medium text-muted">Some illustrations provied by <Link href="https://undraw.co/">Undraw</Link> <Link href="https://undraw.co/license">Check out license</Link></p>
                    </div>
                </div>
                <div className="featureSep" />
            </div>
        </>
    );
}
