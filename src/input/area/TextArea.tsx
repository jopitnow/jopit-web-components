import React from "react";
import './TextArea.css';

type TextAreaProps = {
    title?: string;
    placeholder: string;
    value: string | ReadonlyArray<string> | number;
    cols?: number;
    rows?: number;
    wrap?: "soft" | "hard" | "off";
    maxLength?: number;
    onKeyDown?: (e) => void;
    onTextChange: (e) => void;
};

export default function TextArea(props: TextAreaProps) {
    return (
        <div className="Text_Area">
            {props.title && (
                <div className="Text_Area_Title">
                    {props.title}
                </div>
            )}
            <textarea
                className="Text_Area_Text"
                placeholder={props.placeholder}
                value={props.value}
                cols={props.cols}
                rows={props.rows}
                wrap={props.wrap}
                maxLength={props.maxLength}
                onKeyDown={props.onKeyDown}
                onChange={props.onTextChange}/>
        </div>
    )
}
