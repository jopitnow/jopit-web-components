import React from "react";
import './MiddleButton.css';

type ButtonProps = {
    text: string;
    isLoading?: boolean;
    isDisabled?: boolean;
    background?: string;
    onClick: (e) => void;
};

export default function MiddleButton(props: ButtonProps) {
    return (
        <button
            className="Middle_Button"
            disabled={props.isLoading || props.isDisabled}
            style={{background:props.background}}
            onClick={props.onClick}>
            {
                !props.isLoading
                    ?
                    <p className="Middle_Button_Text">{props.text}</p>
                    :
                    <div className="Middle_Button_Spinner"/>
            }
        </button>
    )
}
