import { Link } from "./navBar";
import { Center } from "@chakra-ui/react";

interface FooterItemOptions {
    href: string;
    name: string;
}

export function FooterItem(options: FooterItemOptions) {
    return (
        <Link href={options.href} className="footerLink text-brand">{options.name}</Link>
    );
}

export default function Footer() {
    return (
        <>
            <div className="footer">
                <Center className="footerColor p-10 pl-10 flex">
                    <div className="text-sm pt-5 pr-10">
                        <p className="font-extrabold">©️ 2022 Turtlepaw's Workshop</p>
                        <p className="text-muted">
                            Not affiliated with Discord, Inc.
                            <br />
                            Discord is a registered trademark of Discord, Inc.
                        </p>
                        <p className="font-medium text-muted">Some illustrations provied by <Link href="https://undraw.co/">Undraw</Link> <Link href="https://undraw.co/license">Check out license</Link></p>
                    </div>
                    <div className="footerCategory pr-10">
                        <div className="text-2xl font-extrabold">Legal</div>
                        <FooterItem href="/privacy" name="Privacy Policy" />
                    </div>
                    <div className="footerCategory pr-10">
                        <div className="text-2xl font-extrabold">Other</div>
                        <FooterItem href="/github" name="GitHub" />
                        <FooterItem href="/dash-git" name="Dashboard Github" />
                        <FooterItem href="/discord" name="Discord" />
                    </div>
                </Center>
                <div className="featureSep" />
            </div>
        </>
    );
}
