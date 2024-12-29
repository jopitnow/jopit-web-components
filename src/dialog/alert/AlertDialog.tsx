import React from "react";
import './AlertDialog.css';
import successIcon from "/assets/images/dialog/jopit_success.png"
import infoIcon from "/assets/images/dialog/jopit_info.png"
import warningIcon from "/assets/images/dialog/jopit_warning.png"
import errorIcon from "/assets/images/dialog/jopit_error.png"

export enum DialogType {
    Success,
    Info,
    Warning,
    Error
}

const icons = {
    [DialogType.Success]: successIcon,
    [DialogType.Info]: infoIcon,
    [DialogType.Warning]: warningIcon,
    [DialogType.Error]: errorIcon,
};

const colors = {
    [DialogType.Success]: "#25B45A",
    [DialogType.Info]: "#497AF8",
    [DialogType.Warning]: "#FFB800",
    [DialogType.Error]: "#FF5656",
};

const styles = {
    [DialogType.Success]: "Alert_Dialog_Agree_Button_Success",
    [DialogType.Info]: "Alert_Dialog_Agree_Button_Info",
    [DialogType.Warning]: "Alert_Dialog_Agree_Button_Warning",
    [DialogType.Error]: "Alert_Dialog_Agree_Button_Error",
};

type DialogProps = {
    type: DialogType;
    title: string;
    description: string;
    disagreeText: string;
    onDisagreeClick: (e) => void;
    agreeText: string;
    onAgreeClick: (e) => void;
};

export default function AlertDialog(props: DialogProps) {
    return (
        <div className="Alert_Dialog">
            <div className="Alert_Dialog_Decoration" style={{background: colors[props.type]}}/>
            <div className="Alert_Dialog_Content">
                <img className="Alert_Dialog_Image" src={icons[props.type]} alt={""}/>
                <div className="Alert_Dialog_Text_Container">
                    <p className="Alert_Dialog_Title">{props.title}</p>
                    <p className="Alert_Dialog_Description">{props.description}</p>
                </div>
            </div>
            <div className="Alert_Dialog_Button_Container">
                <button
                    className="Alert_Dialog_Button Alert_Dialog_Disagree_Button"
                    onClick={props.onDisagreeClick}
                    style={{borderColor: colors[props.type], color: colors[props.type]}}>{props.disagreeText}</button>
                <button
                    className={"Alert_Dialog_Button " + (styles[props.type])}
                    onClick={props.onAgreeClick}>{props.agreeText}</button>
            </div>
        </div>
    )
}
