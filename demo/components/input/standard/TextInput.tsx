import React from "react";
import './TextInput.css';
import { TextInput } from "../../../../src";

export default function StandardTextInputScreen() {
    const onInputChange = () => {
        console.log("Input changed")
    }

    return (
        <div>
            <TextInput
                placeholder="Ingrese texto aquí"
                value=""
                onTextChange={onInputChange}
            />
        </div>
    )
}
