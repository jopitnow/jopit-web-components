import React from "react";
import './ShopHeader.css';
import backIcon from "../../assets/images/header/jopit_back.png";

export default function Header(props) {
    return (
        <div className="Shop_Header">
            <p className="Shop_Header_Title">{props.title}</p>
            <p className="Shop_Header_Description">{props.description}</p>
            {
                props.isBackEnabled &&
                    <button className="Shop_Header_Back_Container" onClick={() => history.back()}>
                        <img className="Shop_Header_Back_Image" src={backIcon} alt="Volver"/>
                        <p className="Shop_Header_Back_Text">Volver</p>
                    </button>
            }
        </div>
    )
}
