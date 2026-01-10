import React from "react";
import './AlertDialog.css';
import successIcon from "../../../assets/images/dialog/jopit_success.webp"
import infoIcon from "../../../assets/images/dialog/jopit_info.webp"
import warningIcon from "../../../assets/images/dialog/jopit_warning.webp"
import errorIcon from "../../../assets/images/dialog/jopit_error.webp"

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
    [DialogType.Success]: "#22c55e",
    [DialogType.Info]: "#3b82f6",
    [DialogType.Warning]: "#f59e0b",
    [DialogType.Error]: "#ef4444",
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
            <div className="Alert_Dialog_Header">
                <div
                    className="Alert_Dialog_Icon_Container"
                    style={{background: `linear-gradient(135deg, ${colors[props.type]}20 0%, ${colors[props.type]}10 100%)`}}>
                    <img className="Alert_Dialog_Image" src={icons[props.type]} alt={""}/>
                </div>
            </div>
            <div className="Alert_Dialog_Content">
                <h2 className="Alert_Dialog_Title">{props.title}</h2>
                <p className="Alert_Dialog_Description">{props.description}</p>
            </div>
            <div className="Alert_Dialog_Button_Container">
                <button
                    className="Alert_Dialog_Button Alert_Dialog_Disagree_Button"
                    onClick={props.onDisagreeClick}>{props.disagreeText}</button>
                <button
                    className={"Alert_Dialog_Button " + (styles[props.type])}
                    onClick={props.onAgreeClick}>{props.agreeText}</button>
            </div>
        </div>
    )
}
