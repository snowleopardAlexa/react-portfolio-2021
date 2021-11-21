import React from 'react';
import "./intro.css";

const Intro = () => {
    return (
      <div className="intro">
          <div className="intro-left">
              <div className="intro-left-wrapper">
                  <h1 className="i-intro">Hello, I'm Alexa!</h1>
                  <h2 className="i-name">but my name is Aleksandra Slomska</h2>
                  <div className="i-title">
                      <div className="i-title-item">React Developer</div>
                      <div className="i-title-item">Front-End Developer</div>
                      <div className="i-title-item">Pet Lover</div>
                      <div className="i-title-item">Proud Moma of a fur-baby Kion The Lion King</div>
                      <div className="i-title-item">Prose & Poetry Writer</div>
                  </div>
              </div>
          </div>
          <div className="intro-right">right</div>
      </div>
    )
};

export default Intro;