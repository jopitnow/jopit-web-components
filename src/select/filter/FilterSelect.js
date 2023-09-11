import React from "react";
import './FilterSelect.css';
import "skeleton-screen-css"

export default function FilterSelect(props) {
    return (
        <div id="select" className="Filter_Select">
            {
                props?.loading ?
                    <div className="Filter_Select_Input_Skeleton">
                        <div className="ssc-square"/>
                    </div>
                    :
                    <select
                        className="Filter_Select_Input"
                        disabled={props.disabled}
                        value={props.value || ""}
                        onChange={props.onChange}
                        onFocus={() => onFocus(props.id)}
                        onBlur={() =>  onBlur(props.id)}>
                        <DefaultOption placeholder={props?.placeholder}/>
                        {props.options?.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
            }
            <div id={props.id + "_arrow"} className="Filter_Select_Arrow"/>
        </div>
    )
}

function DefaultOption(props) {
    return(
        <option value="" disabled>
            {props?.placeholder ?? "Filtro"}
        </option>
    )
}

function onFocus(id) {
    const arrow = document.getElementById(id + "_arrow");

    arrow.style.borderLeft = "2px solid #777777"
    arrow.style.borderBottom = "2px solid #777777"
}

function onBlur(id) {
    const arrow = document.getElementById(id + "_arrow");

    arrow.style.borderLeft = "2px solid #CCCCCC"
    arrow.style.borderBottom = "2px solid #CCCCCC"
}
