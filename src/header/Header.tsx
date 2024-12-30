import React from "react";
import './ShopHeader.css';
import backIcon from "/assets/images/header/jopit_back.webp";
import {resources} from "../resources";

type HeaderProps = {
    title: string;
    description: string;
    isBackEnabled?: boolean;
};

export default function Header(props: HeaderProps) {
    return (
        <div className="Shop_Header">
            <p className="Shop_Header_Title">{props.title}</p>
            <p className="Shop_Header_Description">{props.description}</p>
            {
                props.isBackEnabled &&
                    <button className="Shop_Header_Back_Container" onClick={() => history.back()}>
                        <img className="Shop_Header_Back_Image" src={backIcon} alt={resources.header.backIconAlt}/>
                        <p className="Shop_Header_Back_Text">{resources.header.backText}</p>
                    </button>
            }
        </div>
    )
}
