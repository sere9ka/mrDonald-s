import React from "react";
import "../styles/preloader.css";

export const Preloader = ({ customText }) => {
    return (
        <div className="spinner-container">
     
            <svg width="100%"  viewBox="0 0 276 276" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <g id="spinner">
                    <circle id="bottom" cx="138" cy="138" r="114" stroke="#DBDBDB" strokeWidth="18" />
                    <circle id="upper" cx="138" cy="138" r="123" stroke="#72BBFF" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="373 100" style={{animationDuration:20+"s"}}/>
                </g>
            </svg>
            <p>{customText}</p>
        </div>
    )
}