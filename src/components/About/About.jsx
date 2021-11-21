import React from 'react';
import './about.css';
import snowleopard from "../../img/snowleopard.jpg";

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                      src={snowleopard}
                      alt=""
                      className="a-img"
                    />
                </div>
            </div>
            <div className="about-right"></div>
        </div>
    )
}

export default About;