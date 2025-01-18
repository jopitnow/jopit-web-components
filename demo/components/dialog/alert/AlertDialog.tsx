import React from "react";
import './AlertDialog.css';
import {AlertDialog} from "../../../../src";
import {DialogType} from "../../../../src";

export default function AlertDialogScreen() {
    const onAgreeClick = () => {
        console.log("Agree clicked")
    }

    const onDisagreeClick = () => {
        console.log("Disagree clicked")
    }

    return (
        <div>
            <AlertDialog
                type={DialogType.Error}
                title={"Title"}
                description={"Description"}
                disagreeText={"Disagree"}
                onDisagreeClick={onAgreeClick}
                agreeText={"Agree"}
                onAgreeClick={onDisagreeClick}/>
        </div>
    )
}
