import React from "react";
import redLogo from "../../assets/images/logo/jopit_icon_red.svg"
import whiteLogo from "../../assets/images/logo/jopit_icon_white.svg"
import './Logo.css';
import {resources} from "../resources";

type LogoProps = {
    isWhite: boolean,
    onLogoClicked?: (e) => void;
};

export default function Logo(props: LogoProps) {
    return (
        <button className="Logo" onClick={props.onLogoClicked}>
            <img className="Logo_Image"
                src={props.isWhite ? whiteLogo : redLogo}
                alt={resources.logo.iconAlt} />
            <p className="Logo_Name"
                style={
                    props.isWhite ? { color:'#FFFFFF' } : { color:'#FF5656' }
                }
            >jopit</p>
        </button>
    )
}
