import { useState } from "react";
import { Mention, MentionItem, MentionsInput, SuggestionDataItem } from "react-mentions";

export interface TextMention {
    data: SuggestionDataItem[];
    trigger: string;
}
export interface TextboxProps {
    placeholder?: string;
    mentions?: TextMention[];
    value?: string;
}

export function TextBox({ mentions, placeholder, value }: TextboxProps) {
    const [TextValue, setTextValue] = useState<string>();
    if(value != null) setTextValue(() => value);
    if(mentions != null){
        return (
            <MentionsInput
                placeholder={placeholder || null}
                value={TextValue}
                onChange={(res) => setTextValue(res.target.value)}
                // style={{
                //     color: "white",
                //     backgroundColor: "#40444B",
                //     borderRadius: "5px",
                //     border: "none"
                // }}
            >
                {
                    mentions.map(e => (
                        <Mention
                            key={e.trigger}
                            trigger={e.trigger}
                            data={e.data || []}
                            style={{
                                backgroundColor: "#2f3136",
                            }}
                        />
                    ))
                }
            </MentionsInput>
        );
    } else {
        return (
            <input className="textInput" type="text" />
        );
    }
}