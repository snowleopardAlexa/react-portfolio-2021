import React from 'react';
import './resume.css';
import pdf from "../../documents/resume.pdf";

   
const Resume = () => {
    return (
        <div className="resume">
            <h2>Resume & Cover Letter</h2>
            <a href={pdf} rel="noreferrer" target = "_blank">
             <button>
               RESUME
            </button>
             </a>
             <a href={pdf} rel="noreferrer" target = "_blank">
             <button>
               COVER LETTER
            </button>
             </a>
        </div>
        );
    }
 

export default Resume;