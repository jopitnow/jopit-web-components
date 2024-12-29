import React, {HTMLInputTypeAttribute} from "react";
import './SearchTextInput.css';
import prefixIcon from "../../../assets/images/search/jopit_search.png";

type TextInputProps = {
    placeholder: string;
    value: string | ReadonlyArray<string> | number;
    type?: HTMLInputTypeAttribute;
    onKeyDown?: (e) => void;
    onTextChange: (e) => void;
};

export default function SearchTextInput(props: TextInputProps) {
    return (
        <div className="Search_Text_Input">
            <img className="Search_Text_Input_Image" src={prefixIcon} alt={null}/>
            <input
                className="Search_Text_Input_Text"
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onKeyDown={props.onKeyDown}
                onChange={props.onTextChange}/>
        </div>
    )
}
