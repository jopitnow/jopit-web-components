import React, { JSX } from "react";
import './ShopHeader.css';
import backIcon from "../../assets/images/header/jopit_back.webp";
import {resources} from "../resources";

type HeaderProps = {
    title: string;
    description: (string | JSX.Element)[];
    onBack?: () => void;
    isBackEnabled?: boolean;
};

export default function Header(props: HeaderProps) {

    const onBackClick = () => {
        if (props.onBack) {
            props.onBack()
        } else {
            history.back()
        }
    }

    return (
        <div className="Shop_Header">
            <p className="Shop_Header_Title">{props.title}</p>
            <p className="Shop_Header_Description">{props.description}</p>
            {
                props.isBackEnabled &&
                    <button className="Shop_Header_Back_Container" onClick={onBackClick}>
                        <img className="Shop_Header_Back_Image" src={backIcon} alt={resources.header.backIconAlt}/>
                        <p className="Shop_Header_Back_Text">{resources.header.backText}</p>
                    </button>
            }
        </div>
    )
}
