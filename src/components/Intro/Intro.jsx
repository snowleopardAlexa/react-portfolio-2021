import React from 'react';
import "./intro.css";

const Intro = () => {
    return (
      <div className="intro">
          <div className="intro-left">
              <div className="intro-left-wrapper">
                  <h1 className="i-intro">Hello, I'm Alexa!</h1>
                  <h2 className="i-name">but my name is Aleksandra Slomska</h2>
              </div>
          </div>
          <div className="intro-right">right</div>
      </div>
    )
};

export default Intro;