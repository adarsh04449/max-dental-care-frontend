import React from "react";
import BlueCheckIcon from "./BlueCheckIcon";

const ContentCard = () => {
    return (
        <div className="content-card">
            <h2 className="content-title">Every service under one roof.</h2>
            <p className="content-description">
            Since your time is valuable, we provide every service your family
            could need.
            </p>
            <ul className="service-list">
                <li><BlueCheckIcon className="check-icon" /> Dental hygiene</li>
                <li><BlueCheckIcon className="check-icon" /> Cosmetic care</li>
                <li><BlueCheckIcon className="check-icon" /> Dental implants</li>
                <li><BlueCheckIcon className="check-icon" /> Teeth whitening</li>
                <li><BlueCheckIcon className="check-icon" /> Sedation</li>
                <li><BlueCheckIcon className="check-icon" /> Oral surgery</li>
                <li><BlueCheckIcon className="check-icon" /> Dental appliances</li>
                <li><BlueCheckIcon className="check-icon" /> Root Canal Treatment</li>
            </ul>
        </div>
    )
}

export default ContentCard;