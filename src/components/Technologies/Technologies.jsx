import React from 'react';
import './technologies.css';
//import js from "../../img/tech-icons/js.png";

const Technologies = () => {
    return (
        <React.Fragment>
        <h1 className="tech-title">Technologies</h1>
        <h1 className="tech-subtitle">These are technologies I am using</h1>
        <div className="tech">
            <div className="tech-left">
            <div className="t-award">
                  
                </div>
            </div>
            <div className="tech-right">
                <div className="t-award">
                    <img alt="" className="t-award-img" />
                    <div className="t-award-texts">
                        <h4 className="t-award-title">
                            international design
                        </h4>
                        <p className="t-award-desc">
                            none ems spususus
                        </p>
                    </div>
                    <img  alt="" className="t-award-img" />
                    <div className="t-award-texts">
                        <h4 className="t-award-title">
                            international design
                        </h4>
                        <p className="t-award-desc">
                            none ems spususus
                        </p>
                    </div>
                    <img  alt="" className="t-award-img" />
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