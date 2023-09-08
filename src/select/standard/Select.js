import React from "react";
import './Select.css';

export default function Select(props) {
    return (
        <div id="select" className="Select">
            <p className="Select_Title">{props.title}</p>
            {
                props?.loading ?
                    <div className="Select_Input_Skeleton">
                        <div className="ssc-square"/>
                    </div>
                    :
                    <select
                        className="Select_Input"
                        disabled={props.disabled}
                        value={props.value || ""}
                        onChange={props.onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}>
                        <DefaultOption placeholder={props?.placeholder}/>
                        {props.options?.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
            }
            <div id="arrow" className="Select_Arrow"/>
        </div>
    )
}

function DefaultOption(props) {
    return(
        <option value="" disabled>
            {props?.placeholder ?? "Selecciona una opción"}
        </option>
    )
}

function onFocus() {
    const arrow = document.getElementById("arrow");

    arrow.style.borderLeft = "2px solid #777777"
    arrow.style.borderBottom = "2px solid #777777"
}

function onBlur() {
    const arrow = document.getElementById("arrow");

    arrow.style.borderLeft = "2px solid #CCCCCC"
    arrow.style.borderBottom = "2px solid #CCCCCC"
}
