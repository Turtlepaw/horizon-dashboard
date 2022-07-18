import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

export default function Emojipicker() {
    return (
        //@ts-expect-error
        <Picker set="twitter" theme='dark' />
    );
}