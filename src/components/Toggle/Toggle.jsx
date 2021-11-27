import React from 'react';
import './toggle.css';
import sun from "../../img/sun.png";
import moon from "../../img/moon.png";

const Toggle = () => {
    return (
        <div className="toggle">
            <img src={sun} alt="" className="t-icon"></img>
            <img src={moon} alt="" className="t-icon"></img>
        </div>
    )
}

export default Toggle;