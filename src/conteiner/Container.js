import React from "react";
import './Container.css';

const Container = ({ children }) => {
    return (
        <div className="Container">
            <div className="Container_Header_Skeleton"/>
            <div className="Container_Header_Content">
                <div className="Container_Side_Menu_Skeleton"/>
                <div className="Container_Side_Menu_Content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Container
