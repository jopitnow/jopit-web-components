import React, {useState} from "react";
import './PasswordTextInput.css';
import suffixIcon from "../../../assets/images/password/password_hidden_icon.webp";
import {resources} from "../../resources";

type TextInputProps = {
    title?: string;
    placeholder: string;
    value: string | ReadonlyArray<string> | number;
    autoComplete?: string;
    onKeyDown?: (e) => void;
    onTextChange: (e) => void;
};

export default function PasswordTextInput(props: TextInputProps) {
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className="Text_Password">
            {props.title && (
                <div className="Text_Password_Title">
                    {props.title}
                </div>
            )}
            <input
                className="Text_Password_Text"
                type={isPasswordVisible ? "text" : "password"}
                autoComplete={props.autoComplete}
                placeholder={props.placeholder}
                value={props.value}
                onKeyDown={props.onKeyDown}
                onChange={props.onTextChange}/>
            <button className="Text_Password_Suffix_Button" onClick={togglePasswordVisibility}>
                <img
                    className="Text_Password_Suffix_Icon"
                    src={suffixIcon}
                    alt={isPasswordVisible ? resources.textInput.passwordHiddenAlt : resources.textInput.passwordShownAlt}
                />
                <div hidden={!isPasswordVisible} className="Text_Password_Suffix_Icon_Line"/>
            </button>
        </div>
    )
}
