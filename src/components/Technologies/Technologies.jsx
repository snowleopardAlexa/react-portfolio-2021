import React from 'react';
import './technologies.css';
import snowleopard from "../../img/snow.jpg";

const Technologies = () => {
    return (
        <React.Fragment>
        <h1 className="tech-title">Technologies</h1>
        <h1 className="tech-subtitle">These are technologies I am using</h1>
        <div className="tech">
            <div className="tech-left">
                <div className="t-card bg"></div>
                <div className="t-card">
                    <img
                      src={snowleopard}
                      alt=""
                      className="a-img"
                    />
                </div>
            </div>
            <div className="tech-right">
                <h1 className="t-title">Technologies</h1>
                <p className="t-sub">
                    It is aaa tex....
                </p>
                <p className="t-desc">
                    lorem ipsum dolori....
                </p>
                <div className="t-award">
                    <img src={snowleopard} alt="" className="t-award-img" />
                    <div className="t-award-texts">
                        <h4 className="t-award-title">
                            international design
                        </h4>
                        <p className="t-award-desc">
                            none ems spususus
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Technologies;