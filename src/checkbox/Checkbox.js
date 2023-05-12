import React from "react";
import './Checkbox.css';

export default function Checkbox(props) {
    return (
        <input
            className="Checkbox"
            type="checkbox"
            checked={props.checked}
            onChange={props.onChange}/>
    )
}
