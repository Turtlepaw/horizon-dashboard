import { TextField, MenuItem } from "@mui/material";
import fixText from "capitalize"
import HTMLHead from "../../components/head";
import NavMenu, { Props } from "../../components/navBar";
import { Textarea, Select, Input, Center } from '@chakra-ui/react'

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
    return (
        <Center>
            <HTMLHead pageTitle="Embed Creator" />
            <NavMenu user={props.user} />
            <div>
                <Input
                    id="title"
                    placeholder="Title"
                />
                <Input
                    id="description"
                    placeholder="Description"
                    required={true}
                />
                <Select
                    id="color"
                    placeholder="Color"
                >
                    {Colors.map((option) => (
                        <option key={option} value={option}>
                            {fixText(option)}
                        </option>
                    ))}
                </Select>
                <Input
                    id="author_name"
                    placeholder="Author"
                />
                <Input
                    id="footer_name"
                    placeholder="Footer"
                />
            </div>
        </Center>
    );
}