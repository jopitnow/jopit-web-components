import React from "react";
import './TextArea.css';

export default function TextArea(props) {
    return (
        <div className="Text_Area">
            <p className="Text_Area_Title">{props.title}</p>
            <textarea
                className="Text_Area_Text"
                placeholder={props.placeholder}
                value={props.value}
                cols={props.cols}
                rows={props.rows}
                wrap={props.wrap}
                maxLength={props.maxLength}
                onChange={props.onTextChange}/>
        </div>
    )
}