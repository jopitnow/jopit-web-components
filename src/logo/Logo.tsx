import React from "react";
import logo from "../../assets/images/logo/jopit_icon.svg"
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
                src={logo}
                alt={resources.logo.iconAlt} />
            <p className="Logo_Name"
                style={
                    props.isWhite ? { color:'#FFFFFF' } : { color:'#FF536C' }
                }
            >jopit</p>
        </button>
    )
}
