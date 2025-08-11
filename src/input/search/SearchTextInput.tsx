import React, {HTMLInputTypeAttribute} from "react";
import './SearchTextInput.css';
import prefixIcon from "../../../assets/images/search/jopit_search.webp";

type TextInputProps = {
    title?: string;
    placeholder: string;
    value: string | ReadonlyArray<string> | number;
    type?: HTMLInputTypeAttribute;
    onKeyDown?: (e) => void;
    onTextChange: (e) => void;
};

export default function SearchTextInput(props: TextInputProps) {
    return (
        <div className="Text_Search">
            {props.title && (
                <div className="Text_Search_Title">
                    {props.title}
                </div>
            )}
            <img className="Text_Search_Prefix_Icon" src={prefixIcon} alt="Buscar"/>
            <input
                className="Text_Search_Text"
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onKeyDown={props.onKeyDown}
                onChange={props.onTextChange}/>
        </div>
    )
}
