import React from "react";
import './SearchTextInput.css';
import prefixIcon from "../../../assets/images/search/jopit_search.png";

export default function SearchTextInput(props) {
    return (
        <div className="Search_Text_Input">
            <img className="Search_Text_Input_Image" src={prefixIcon} alt="Buscar aquí"/>
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
