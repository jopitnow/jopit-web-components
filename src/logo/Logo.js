import React from "react";
import redLogo from "/assets/images/logo/jopit_icon_red.svg"
import whiteLogo from "/assets/images/logo/jopit_icon_white.svg"
import './Logo.css';

export default function Logo(props) {
    return (
        <button className="Logo" onClick={props.onLogoClicked}>
            <img className="Logo_Image"
                src={props.isWhite ? whiteLogo : redLogo}
                alt="Jopit" />
            <p className="Logo_Name"
                style={
                    props.isWhite ? { color:'#FFFFFF' } : { color:'#FF5656' }
                }
            >jopit</p>
        </button>
    )
}
