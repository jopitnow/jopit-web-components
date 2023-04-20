import React from "react";
import './AlertDialog.css';
import successIcon from "/assets/images/dialog/jopit_success.png"
import infoIcon from "/assets/images/dialog/jopit_info.png"
import warningIcon from "/assets/images/dialog/jopit_warning.png"
import errorIcon from "/assets/images/dialog/jopit_error.png"

export default function AlertDialog(props) {
    return (
        <div className="Alert_Dialog">
            <div className="Alert_Dialog_Decoration" style={{background: getDialogColor(props.type)}}/>
            <div className="Alert_Dialog_Content">
                <img className="Alert_Dialog_Image" src={getDialogIcon(props.type)} alt={""}/>
                <div className="Alert_Dialog_Text_Container">
                    <p className="Alert_Dialog_Title">{props.title}</p>
                    <p className="Alert_Dialog_Description">{props.description}</p>
                </div>
            </div>
            <div className="Alert_Dialog_Button_Container">
                <button
                    className="Alert_Dialog_Disagree_Button"
                    onClick={props.onDisagreeClick}
                    style={{borderColor: getDialogColor(props.type), color: getDialogColor(props.type)}}>{props.disagreeText}</button>
                <button
                    className="Alert_Dialog_Agree_Button"
                    onClick={props.onAgreeClick}
                    style={{background: getDialogColor(props.type)}}>{props.agreeText}</button>
            </div>
        </div>
    )
}

function getDialogIcon(type) {
    switch (type) {
    case "success":
        return successIcon;
    case "info":
        return infoIcon;
    case "warning":
        return warningIcon;
    default:
        return errorIcon;
    }
}

function getDialogColor(type) {
    switch (type) {
    case "success":
        return "#25B45A";
    case "info":
        return "#497AF8";
    case "warning":
        return "#FFB800";
    default:
        return "#FF5656";
    }
}
