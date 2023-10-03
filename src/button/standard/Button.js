import React from "react";
import './Button.css';

export default function Button(props) {
    return (
        <button
            className="Button"
            disabled={props.isLoading || props.disabled}
            style={{background:props.background}}
            onClick={props.onClick}>
            {
                !props.isLoading
                    ?
                    <p className="Button_Text">{props.text}</p>
                    :
                    <div className="Button_Spinner"/>
            }
        </button>
    )
}
