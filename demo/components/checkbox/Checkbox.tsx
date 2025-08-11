import React, {useState} from "react";
import './Checkbox.css';
import {Checkbox} from "../../../src";

export default function CheckboxScreen() {
    const [isChecked, setIsChecked] = useState(false);

    const onCheckboxChange = (checked: boolean) => {
        setIsChecked(checked);
        console.log("Checkbox changed:", checked);
    }

    return (
        <div>
            <Checkbox
                checked={isChecked}
                onChange={onCheckboxChange}/>
        </div>
    )
}
