import React from "react";
import './PasswordTextInput.css';
import { PasswordTextInput } from "../../../../src";

export default function PasswordTextInputScreen() {
    const onPasswordChange = () => {
        console.log("Password input changed")
    }

    return (
        <div>
            <PasswordTextInput
                placeholder="Contraseña"
                value=""
                onTextChange={onPasswordChange}
            />
        </div>
    )
}
