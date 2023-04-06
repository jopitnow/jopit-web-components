import React from "react";
import './Select.css';

export default function Select(props) {
    return (
        <div className="Select">
            <p className="Select_Title">{props.title}</p>
            <select className="Select_Input" value={props.value} onChange={props.onChange}>
                {props.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <div className="Select_Arrow_Container">
                <div className="Select_Arrow"/>
            </div>
        </div>
    )
}
