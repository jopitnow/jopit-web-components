import React from "react";
import './MiddleButton.css';
import {MiddleButton} from "../../../../src";

export default function MiddleButtonScreen() {
    const onButtonClick = () => {
        console.log("Button clicked")
    }

    return (
        <div>
            <MiddleButton text={"Middle Button"} onClick={onButtonClick}/>
        </div>
    )
}
