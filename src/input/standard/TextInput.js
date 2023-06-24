import React from "react";
import './TextInput.css';

export default function TextInput(props) {
    return (
        <div className="Text_Input">
            <p className="Text_Input_Title">{props.title}</p>
            <input
                className="Text_Input_Text"
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                autoComplete={props.autoComplete}
                onChange={props.onTextChange}/>
        </div>
    )
}
