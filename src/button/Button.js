import React from "react";
import './Button.css';

export default function Button(props) {
    return (
        <button
            className="Button"
            style={
                {
                    paddingTop:props.padding ? props.padding : "16px",
                    paddingBottom:props.padding ? props.padding : "16px"
                }
            }
            onClick={props.onClick}>
            <p
                className="Button_Text"
                style={{fontSize:props.fontSize ? props.fontSize : "16px"}}
            >{props.text}</p>
        </button>
    )
}
