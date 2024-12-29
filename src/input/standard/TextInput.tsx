import React, {HTMLInputTypeAttribute} from "react";
import './TextInput.css';

type TextInputProps = {
    title: string;
    placeholder: string;
    value: string | ReadonlyArray<string> | number;
    type?: HTMLInputTypeAttribute;
    autoComplete?: never;
    onKeyDown?: (e) => void;
    onTextChange: (e) => void;
};

export default function TextInput(props: TextInputProps) {
    return (
        <div className="Text_Input">
            <p className="Text_Input_Title">{props.title}</p>
            <input
                className="Text_Input_Text"
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                autoComplete={props.autoComplete}
                onKeyDown={props.onKeyDown}
                onChange={props.onTextChange}/>
        </div>
    )
}
