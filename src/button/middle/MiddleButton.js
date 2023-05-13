import React from "react";
import './MiddleButton.css';

export default function MiddleButton(props) {
    return (
        <button
            className="Middle_Button"
            style={{background:props.background}}
            onClick={props.onClick}>
            <p className="Middle_Button_Text">{props.text}</p>
        </button>
    )
}
