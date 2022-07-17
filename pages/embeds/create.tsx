import { TextField, MenuItem } from "@mui/material";
import fixText from "capitalize"
import HTMLHead from "../../components/head";
import NavMenu, { Props } from "../../components/navBar";
import { Textarea, Select, Input, Center } from '@chakra-ui/react'
import Footer from "../../components/footer";

export const Colors = [
    'DEFAULT',
    'WHITE',
    'AQUA',
    'GREEN',
    'BLUE',
    'YELLOW',
    'PURPLE',
    'LUMINOUS_VIVID_PINK',
    'FUCHSIA',
    'GOLD',
    'ORANGE',
    'RED',
    'GREY',
    'DARKER_GREY',
    'NAVY',
    'BLURPLE'
];

export default function (props: Props) {
    const className = "rounded-lg shadow-lg bg-grey-light text-brand flex max-w-lg mx-auto my-2";
    return (
        <>
            <HTMLHead pageTitle="Embed Creator" />
            <NavMenu user={props.user} />
            <Center className="px-2">
                <Input
                    id="title"
                    placeholder="Title"
                    className={className}
                />
            </Center>
            <Center className="px-2">
                <Textarea
                    id="description"
                    placeholder="Description"
                    required={true}
                    className={className}
                />
            </Center>
            <Center className="px-2">
                <Select
                    id="color"
                    placeholder="Color"
                    className={className + " bg-grey-light"}
                >
                    {Colors.map((option) => (
                        <option key={option} value={option} className="text-black">
                            {fixText(option)}
                        </option>
                    ))}
                </Select>
            </Center>
            <Center className="px-2">
                <Input
                    id="author_name"
                    placeholder="Author"
                    className={className}
                />
            </Center>
            <Center className="px-2">
                <Input
                    id="footer_name"
                    placeholder="Footer"
                    className={className}
                />
            </Center>
            <Footer/>
        </>
    );
}