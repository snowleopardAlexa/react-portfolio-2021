import React from 'react';
import './about.css';
import snowleopard from "../../img/snow.jpg";

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
            <div className="about-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    It is aaa tex....
                </p>
                <p className="a-desc">
                    lorem ipsum dolori....
                </p>
                <div className="a-award">
                    <img src={snowleopard} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">
                            international design
                        </h4>
                        <p className="a-award-desc">
                            none ems spususus
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;