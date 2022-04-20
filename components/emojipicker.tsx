import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

export default function Emojipicker(){
    return (
        <Picker set="twitter" theme='dark'/>
    );
}