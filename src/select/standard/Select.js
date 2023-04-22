import React from "react";
import './Select.css';

export default function Select(props) {
    return (
        <div id="select" className="Select">
            <p className="Select_Title">{props.title}</p>
            <select
                className="Select_Input"
                disabled={props.disabled}
                value={props.value}
                onChange={props.onChange}
                onFocus={onFocus}
                onBlur={onBlur}>
                <option
                    value=""
                    disabled
                    selected={props.value === undefined || props.valueOf() === null}
                >{props?.placeholder ?? "Selecciona una opción"}</option>
                {props.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <div id="arrow" className="Select_Arrow"/>
        </div>
    )
}

function onFocus() {
    const arrow = document.getElementById("arrow");

    arrow.style.borderLeft = "2px solid #333333"
    arrow.style.borderBottom = "2px solid #333333"
}

function onBlur() {
    const arrow = document.getElementById("arrow");

    arrow.style.borderLeft = "2px solid #CCCCCC"
    arrow.style.borderBottom = "2px solid #CCCCCC"
}
