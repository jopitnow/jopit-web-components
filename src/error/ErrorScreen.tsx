import React from "react";
import './ErrorScreen.css';
import errorIcon from "../../assets/images/error/jopit_fallback_icon.webp";
import {resources} from "../resources";
import {Button} from "../index";

export default function ErrorScreen() {
    return (
        <div className="Error_Screen">
            <img className="Error_Screen_Image" src={errorIcon} alt={resources.error.errorIconAlt}/>
            <p className="Error_Screen_Title">{resources.error.errorTitle}</p>
            <p className="Error_Screen_Description">{resources.error.errorDescription}</p>
            <div className="Error_Screen_Button">
                <Button text={resources.error.errorRetryLabel} onClick={() => window.location.reload()}/>
            </div>
        </div>
    )
}
