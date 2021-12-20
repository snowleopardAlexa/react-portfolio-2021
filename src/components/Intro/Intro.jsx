import React from 'react';
import "./intro.css";
import alexakion1filter from "../../img/alexakion1filter.jpg";

const Intro = () => {
    return (
      <div className="intro">
          <div className="intro-left">
              <div className="intro-left-wrapper">
                  <h1 className="i-intro">Hello, I'm Alexa!</h1>
                  <h2 className="i-name">and this is my React portoflio.</h2>
                  <div className="i-title">
                      <div className="i-title-wrapper">
                       <div className="i-title-item">I am . . .</div>
                       <div className="i-title-item">Front-End Developer</div>
                       <div className="i-title-item">Pet Lover</div>
                       <div className="i-title-item">Moma of a fur-baby</div>
                       <div className="i-title-item">Prose & Poetry Writer</div>
                      </div>
                  </div>
                  <p className="i-desc">
                      I am Front-End/React Developer that is aspiring to become Full Stack Developer.
                  </p>
                  <a href="https://snowleopardalexa.github.io/portfolio-2021/"><button className="front-end-portfolio">
                      Go to Front-End Portfolio
                  </button></a>
              </div>
          </div>
          <div className="intro-right">
              <div className="i-bg"></div>
              <img src={alexakion1filter} alt="" className="i-img" />
          </div>
      </div>
    )
};

export default Intro;