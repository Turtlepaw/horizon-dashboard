import { TextField, MenuItem } from "@mui/material";
import fixText from "capitalize"
import HTMLHead from "../../components/head";
import NavMenu, { Props } from "../../components/navBar";
import { Textarea, Select, Input, Center } from '@chakra-ui/react'
import { TextBox } from "../../components/TextBox";

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
        <>
            <HTMLHead pageTitle="Embed Creator" /><NavMenu user={props.user} /><div>
                <Center style={{
                    display: 'block',
                    paddingLeft: '10%',
                    paddingRight: '10%',
                }}>
                    <Input
                        id="title"
                        placeholder="Title" />
                    <TextBox
                        mentions={[
                            {
                                trigger: "@",
                                data: [
                                    {
                                        id: "<@14508408413>",
                                        display: "@Turtlepaw"
                                    }
                                ]
                            }
                        ]}
                        placeholder="Description" />
                    <Select
                        id="color"
                        placeholder="Color"
                        className="textInput select"
                    >
                        {Colors.map((option) => (
                            <option key={option} value={option}>
                                {fixText(option)}
                            </option>
                        ))}
                    </Select>
                    <Input
                        id="author_name"
                        placeholder="Author" />
                    <Input
                        id="footer_name"
                        placeholder="Footer" />
                </Center>
            </div>
        </>
    );
}