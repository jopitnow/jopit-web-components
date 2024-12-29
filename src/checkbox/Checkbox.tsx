import React from "react";
import './Checkbox.css';
import checkmark from '../../assets/images/checkbox/jopit_checkmark.png'

type CheckboxProps = {
    checked: boolean;
    onChange: (e) => void;
};

export default function Checkbox(props: CheckboxProps) {
    return (
        <div className="Checkbox_Container">
            <input
                className="Checkbox"
                type="checkbox"
                checked={props.checked}
                onChange={props.onChange}/>
            <img className="Checkmark" src={checkmark} alt={""}/>
        </div>
    )
}
