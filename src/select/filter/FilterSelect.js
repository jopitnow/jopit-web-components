import React from "react";
import './FilterSelect.css';

export default function FilterSelect(props) {
    return (
        <div id="select" className="Filter_Select">
            <select
                className="Filter_Select_Input"
                disabled={props.disabled}
                value={props.value}
                onChange={props.onChange}
                onFocus={() => onFocus(props.id)}
                onBlur={() =>  onBlur(props.id)}>
                <option
                    value=""
                    disabled
                    selected={props.value === undefined || props.valueOf() === null}
                >{props?.placeholder ?? "Filtro"}</option>
                {props.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <div id={props.id + "_arrow"} className="Filter_Select_Arrow"/>
        </div>
    )
}

function onFocus(id) {
    const arrow = document.getElementById(id + "_arrow");

    arrow.style.borderLeft = "2px solid #333333"
    arrow.style.borderBottom = "2px solid #333333"
}

function onBlur(id) {
    const arrow = document.getElementById(id + "_arrow");

    arrow.style.borderLeft = "2px solid #CCCCCC"
    arrow.style.borderBottom = "2px solid #CCCCCC"
}
