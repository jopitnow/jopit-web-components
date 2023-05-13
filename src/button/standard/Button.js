import React from "react";
import './Button.css';

export default function Button(props) {
    return (
        <button
            className="Button"
            style={{background:props.background}}
            onClick={props.onClick}>
            <p className="Button_Text">{props.text}</p>
        </button>
    )
}
