import React from "react";
import './TextArea.css';
import { TextArea } from "../../../../src";

export default function AreaTextInputScreen() {
    const onTextAreaChange = () => {
        console.log("Text area changed")
    }

    return (
        <div>
            <TextArea
                placeholder="Ingrese su mensaje aquí..."
                value=""
                onTextChange={onTextAreaChange}
                rows={4}
            />
        </div>
    )
}
