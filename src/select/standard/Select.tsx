import React, {useRef} from "react";
import './Select.css';
import {resources} from "../../resources";

export type SelectOption = {
    value: number,
    label: string
}

type SelectProps = {
    title: string,
    placeholder: string,
    options: ReadonlyArray<SelectOption>
    value?: string | ReadonlyArray<string> | number,
    isLoading?: boolean,
    isDisabled?: boolean,
    onChange: (e) => void;
};

export default function Select(props: SelectProps) {
    const arrow = useRef<HTMLDivElement | null>(null);

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
                        onFocus={() => onFocus(arrow)}
                        onBlur={() =>  onBlur(arrow)}>
                        <DefaultOption placeholder={props?.placeholder}/>
                        {props.options?.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
            }
            <div ref={arrow} className="Select_Arrow" />
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

export function onFocus(arrow: React.RefObject<HTMLDivElement>) {
    if (arrow.current) {
        arrow.current.style.borderLeft = "2px solid #777777";
        arrow.current.style.borderBottom = "2px solid #777777";
    }
}

export function onBlur(arrow: React.RefObject<HTMLDivElement>) {
    if (arrow.current) {
        arrow.current.style.borderLeft = "2px solid #CCCCCC";
        arrow.current.style.borderBottom = "2px solid #CCCCCC";
    }
}
