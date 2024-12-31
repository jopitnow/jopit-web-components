import React from "react";
import './FilterSelect.css';
import "skeleton-screen-css"
import {DefaultOptionProps, onBlur, onFocus, SelectOption} from "../standard/Select";
import {resources} from "../../resources";

type SelectProps = {
    id: string,
    placeholder: string,
    options: ReadonlyArray<SelectOption>
    value?: string | ReadonlyArray<string> | number,
    isLoading: boolean,
    isDisabled: boolean,
    onChange: (e) => void;
};

export default function FilterSelect(props: SelectProps) {
    return (
        <div id="select" className="Filter_Select">
            {
                props?.isLoading ?
                    <div className="Filter_Select_Input_Skeleton">
                        <div className="ssc-square"/>
                    </div>
                    :
                    <select
                        className="Filter_Select_Input"
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
            <div id={props.id + "_arrow"} className="Filter_Select_Arrow"/>
        </div>
    )
}

function DefaultOption(props: DefaultOptionProps) {
    return(
        <option value="" disabled>
            {props?.placeholder ?? resources.select.defaultFilterPlaceholder}
        </option>
    )
}
