import React from 'react';
import './resume.css';
import pdf from "../../documents/resume.pdf";

   
const Resume = () => {
    return (
        <div className="resume">
            <div className="r-texts">
               <h1 className="r-title">Resume</h1>
               <p className="r-desc">
                  This is my digital resume and cover letter.
               </p>
           </div>
            <a href={pdf} rel="noreferrer" target = "_blank">
             <button className="r-letter">
               RESUME
            </button>
             </a>
             <a href={pdf} rel="noreferrer" target = "_blank">
             <button className="c-letter">
               COVER LETTER
            </button>
             </a>
        </div>
        );
    }
 

export default Resume;