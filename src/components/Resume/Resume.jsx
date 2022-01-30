import React from 'react';
import './resume.css';
import resume from "../../documents/resume.pdf";
import coverletter from "../../documents/coverletter.pdf";
   
const Resume = () => {
    return (
        <div className="resume">
            <div className="r-texts">
               <h1 className="r-title">Resume</h1>
               <p className="r-desc">
                  Check out my digial Resume and Cover Letter.
               </p>
           </div>
            <a href={resume} rel="noreferrer" target = "_blank">
             <button className="r-letter">
               RESUME
            </button>
             </a>
             <a href={coverletter} rel="noreferrer" target = "_blank">
             <button className="c-letter">
               COVER LETTER
            </button>
             </a>
        </div>
        );
    }
 

export default Resume;