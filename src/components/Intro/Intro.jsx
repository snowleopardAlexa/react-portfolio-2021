import React from 'react';
import "./intro.css";
import alexa from "../../img/alexa-removebg-preview.png";

const Intro = () => {
    return (
      <div className="intro">
          <div className="intro-left">
              <div className="intro-left-wrapper">
                  <h1 className="i-intro">Hello, I'm Alexa!</h1>
                  <h2 className="i-name">but my name is Aleksandra Slomska</h2>
                  <div className="i-title">
                      <div className="i-title-wrapper">
                      <div className="i-title-item">React Developer</div>
                      <div className="i-title-item">Front-End Developer</div>
                      <div className="i-title-item">Pet Lover</div>
                      <div className="i-title-item">Proud Moma of a fur-baby Kion The Lion King</div>
                      <div className="i-title-item">Prose & Poetry Writer</div>
                      </div>
                  </div>
                  <div className="i-desc">
                      I am Front-End/React Developer that is aspiring to become Full Stack Developer.
                  </div>
              </div>
          </div>
          <div className="intro-right">
              <div className="i-bg">
                  
              </div>
              <img src={alexa} alt="" className="i-img" />
          </div>
      </div>
    )
};

export default Intro;