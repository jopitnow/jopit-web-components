import React from "react";
import './PasswordTextInput.css';
import suffixIcon from "../../../assets/images/password/password_hidden_icon.png";

export default function PasswordTextInput(props) {
    return (
        <div className="Password_Text_Input_Container">
            <p className="Password_Text_Input_Title">{props.title}</p>
            <input
                id="Password_Text_Input_Text"
                className="Password_Text_Input_Text"
                type="password"
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onTextChange}/>
            <button className="Password_Text_Input_Suffix_Button" onClick={onHideStateChange}>
                <img className="Password_Text_Input_Suffix_Icon" src={suffixIcon} alt="Ocultar/Mostrar contraseña"/>
                <div id="Password_Text_Input_Suffix_Icon_Line" className="Password_Text_Input_Suffix_Icon_Line"/>
            </button>
        </div>
    )
}

function onHideStateChange() {
    const input = document.getElementById("Password_Text_Input_Text");
    const line = document.getElementById("Password_Text_Input_Suffix_Icon_Line");

    if (input.type === "password") {
        input.type = "text";
        line.hidden = true
    } else {
        input.type = "password";
        line.hidden = false
    }
}
