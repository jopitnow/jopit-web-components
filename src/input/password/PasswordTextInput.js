import React from "react";
import './PasswordTextInput.css';
import suffixIcon from "../../../assets/images/password/password_hidden_icon.png";

export default function PasswordTextInput(props) {
    return (
        <div className="Password_Text_Input_Container">
            <p className="Password_Text_Input_Title">{props.title}</p>
            <input
                id={"password_input_" + props.id}
                className="Password_Text_Input_Text"
                type="password"
                autoComplete={props.autoComplete}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onTextChange}/>
            <button className="Password_Text_Input_Suffix_Button" onClick={() => onHideStateChange(props.id)}>
                <img className="Password_Text_Input_Suffix_Icon" src={suffixIcon} alt="Ocultar/Mostrar contraseña"/>
                <div id={"password_line_" + + props.id} className="Password_Text_Input_Suffix_Icon_Line"/>
            </button>
        </div>
    )
}

function onHideStateChange(id) {
    const input = document.getElementById("password_input_" + id);
    const line = document.getElementById("password_line_" + id);

    if (input.type === "password") {
        input.type = "text";
        line.hidden = true
    } else {
        input.type = "password";
        line.hidden = false
    }
}
