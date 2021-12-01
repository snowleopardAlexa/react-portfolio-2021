import React from 'react';
import './technologieslist.css';
import Technologies from "../Technologies/Technologies";
import {technologies} from "../../data";
import pdf from "../../documents/resume.pdf";
//import node from "../../img/tech-icons/nodejs-icon.svg";

const TechnologiesList = () => {
    return (
       <div className="tl">
           <div className="tl-texts">
               <h1 className="tl-title">Technologies</h1>
               <p className="tl-desc">
                   These are technologies I have worked with...
               </p>
           </div>
           <div className="tl-list">
               {technologies.map((item) => (
                   <Technologies
                      key={item.id}
                      img={item.img}
                      title={item.title}
                   />
               ))}
           </div>
           <div className="pdf">
            <a href = {pdf} rel="noreferrer" target = "_blank">
             <button>
              PDF
            </button>
             </a>
           </div>
       </div>
    );
}

export default TechnologiesList;