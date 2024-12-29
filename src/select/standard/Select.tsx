import React from "react";
import './Select.css';
import {resources} from "../../resources";

export type SelectOption = {
    value: number,
    label: string
}

type SelectProps = {
    id: string,
    title: string,
    placeholder: string,
    options: ReadonlyArray<SelectOption>
    value?: string | ReadonlyArray<string> | number,
    isLoading: boolean,
    isDisabled: boolean,
    onChange: (e) => void;
};

export default function Select(props: SelectProps) {
    return (
        <div id="select" className="Select">
            <p className="Select_Title">{props.title}</p>
            {
                props?.isLoading ?
                    <div className="Select_Input_Skeleton">
                        <div className="ssc-square"/>
                    </div>
                    :
                    <select
                        className="Select_Input"
                        disabled={props.isDisabled}
                        value={props.value || ""}
                        onChange={props.onChange}
                        onFocus={() => onFocus(props.id)}
                        onBlur={() =>  onBlur(props.id)}>
                        <DefaultOption placeholder={props?.placeholder}/>
                        {props.options?.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
            }
            <div id={props.id + "_arrow"} className="Select_Arrow"/>
        </div>
    )
}

export type DefaultOptionProps = {
    placeholder?: string
}

function DefaultOption(props: DefaultOptionProps) {
    return(
        <option value="" disabled>
            {props?.placeholder ?? resources.select.defaultPlaceholder}
        </option>
    )
}

export function onFocus(id: string) {
    const arrow = document.getElementById(id + "_arrow");

    arrow.style.borderLeft = "2px solid #777777"
    arrow.style.borderBottom = "2px solid #777777"
}

export function onBlur(id: string) {
    const arrow = document.getElementById(id + "_arrow");

    arrow.style.borderLeft = "2px solid #CCCCCC"
    arrow.style.borderBottom = "2px solid #CCCCCC"
}
