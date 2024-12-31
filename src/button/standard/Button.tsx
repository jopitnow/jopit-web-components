import React from "react";
import './Button.css';

type ButtonProps = {
    text: string;
    isLoading?: boolean;
    isDisabled?: boolean;
    background?: string;
    onClick: (e) => void;
};

export default function Button(props: ButtonProps) {
    return (
        <button
            className="Button"
            disabled={props.isLoading || props.isDisabled}
            style={{background:props.background}}
            onClick={props.onClick}>
            {
                !props.isLoading
                    ?
                    <p className="Button_Text">{props.text}</p>
                    :
                    <div className="Button_Spinner"/>
            }
        </button>
    )
}
