import React from "react";

import './ComponentList.css';

import Button from "../../src/button/standard/Button";

export default function ComponentList() {
    return (
        <div className="Component_List">
            <div className="Component_List_Container">
                <p className="Component_List_Title">Jopit Web Components</p>
                <p className="Component_List_Subtitle">Buttons</p>
                <ComponentButton text={"Button"} path={"/button/standard"}/>
                <ComponentButton text={"Middle Button"} path={"/button/middle"}/>
                <p className="Component_List_Subtitle">Checkbox</p>
                <ComponentButton text={"Checkbox"} path={"/checkbox"}/>
                <p className="Component_List_Subtitle">Dialogs</p>
                <ComponentButton text={"Alert Dialog"} path={"/alertdialog"}/>
                <p className="Component_List_Subtitle">Error</p>
                <ComponentButton text={"Error Screen"} path={"/error"}/>
                <p className="Component_List_Subtitle">Header</p>
                <ComponentButton text={"Header"} path={"/header"}/>
                <p className="Component_List_Subtitle">Inputs</p>
                <ComponentButton text={"Text Area"} path={"/input/area"}/>
                <ComponentButton text={"Text Password"} path={"/input/password"}/>
                <ComponentButton text={"Text Search"} path={"/input/search"}/>
                <ComponentButton text={"Text Standard"} path={"/input/standard"}/>
                <p className="Component_List_Subtitle">Logo</p>
                <ComponentButton text={"Logo"} path={"/logo"}/>
                <p className="Component_List_Subtitle">Selectors</p>
                <ComponentButton text={"Selector Filter"} path={"/selector/filter"}/>
                <ComponentButton text={"Selector Standard"} path={"/selector/standard"}/>
            </div>
        </div>
    )
}

function ComponentButton(props) {
    const onButtonClicked = (path) => {
        window.location.href = path
    }

    return (
        <div className="Component_List_Button">
            <Button text={props.text} onClick={() => onButtonClicked(props.path)}/>
        </div>
    )
}
