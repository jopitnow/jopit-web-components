import React from "react";
import './Button.css';
import {Button} from "../../../../src";

export default function StandardButtonScreen() {
    const onButtonClick = () => {
        console.log("Button clicked")
    }

    return (
        <div>
            <Button text={"Button"} onClick={onButtonClick}/>
        </div>
    )
}
