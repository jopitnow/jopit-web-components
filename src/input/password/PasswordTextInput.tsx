import React, {useState} from "react";
import './PasswordTextInput.css';
import suffixIcon from "../../../assets/images/password/password_hidden_icon.webp";
import {resources} from "../../resources";

type TextInputProps = {
    title: string;
    placeholder: string;
    value: string | ReadonlyArray<string> | number;
    autoComplete?: never;
    onKeyDown?: (e) => void;
    onTextChange: (e) => void;
};

export default function PasswordTextInput(props: TextInputProps) {
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className="Password_Text_Input_Container">
            <p className="Password_Text_Input_Title">{props.title}</p>
            <input
                className="Password_Text_Input_Text"
                type={isPasswordVisible ? "text" : "password"}
                autoComplete={props.autoComplete}
                placeholder={props.placeholder}
                value={props.value}
                onKeyDown={props.onKeyDown}
                onChange={props.onTextChange}/>
            <button className="Password_Text_Input_Suffix_Button" onClick={togglePasswordVisibility}>
                <img
                    className="Password_Text_Input_Suffix_Icon"
                    src={suffixIcon}
                    alt={isPasswordVisible ? resources.textInput.passwordHiddenAlt : resources.textInput.passwordShownAlt}
                />
                <div hidden={!isPasswordVisible} className="Password_Text_Input_Suffix_Icon_Line"/>
            </button>
        </div>
    )
}
