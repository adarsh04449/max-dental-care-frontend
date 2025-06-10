import React from "react";
import groupLogo from "../../../assets/group-logo.png"
import "./iconbar.css";


const IconBar = () => {
    return (
        <ul className="icon-bar">
            <li>
                <div className="icon-item">
                <img src={groupLogo} className="icon" />
                <span>Comprehensive suite of dental services</span>
                </div>
            </li>
            <li>
                <div className="icon-item">
                <img src={groupLogo} className="icon" />
                <span>Evening and Saturday appointments</span>
                </div>
            </li>
            <li>
                <div className="icon-item">
                <img src={groupLogo} className="icon" />
                <span>Advanced Dental Technology</span>
                </div>
            </li>
            <li>
                <div className="icon-item">
                <img src={groupLogo} className="icon" />
                <span>Convenient office location</span>
                </div>
            </li>
        </ul>

    )

}

export default IconBar;