import React from "react";
import './Header.css';
import backIcon from "../../assets/images/header/jopit_back.png";

export default function Header(props) {
    return (
        <div className="Header">
            <p className="Header_Title">{props.title}</p>
            <p className="Header_Description">{props.description}</p>
            {
                props.isBackEnabled &&
                    <button className="Header_Back_Container" onClick={() => history.back()}>
                        <img className="Header_Back_Image" src={backIcon} alt="Volver"/>
                        <p className="Header_Back_Text">Volver</p>
                    </button>
            }
        </div>
    )
}
