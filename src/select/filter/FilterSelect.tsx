import React, {useRef} from "react";
import './FilterSelect.css';
import "skeleton-screen-css"
import {DefaultOptionProps, onBlur, onFocus, SelectOption} from "../standard/Select";
import {resources} from "../../resources";

type SelectProps = {
    placeholder: string,
    options: ReadonlyArray<SelectOption>
    value?: string | ReadonlyArray<string> | number,
    isLoading?: boolean,
    isDisabled?: boolean,
    onChange: (e) => void;
};

export default function FilterSelect(props: SelectProps) {
    const arrow = useRef<HTMLDivElement | null>(null);

    return (
        <div className="Filter_Select">
            {
                props?.isLoading ?
                    <div className="Filter_Select_Skeleton">
                        <div className="ssc-square"/>
                    </div>
                    :
                    <select
                        className="Filter_Select_Text"
                        disabled={props.isDisabled}
                        value={props.value || ""}
                        onChange={props.onChange}
                        onFocus={() => onFocus(arrow)}
                        onBlur={() => onBlur(arrow)}>
                        <DefaultOption placeholder={props?.placeholder}/>
                        {props.options?.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
            }
            <div ref={arrow} className="Filter_Select_Arrow" />
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
