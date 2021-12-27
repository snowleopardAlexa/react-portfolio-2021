import React from 'react';
import './technologieslist.css';
import Technologies from "../Technologies/Technologies";
import {technologies} from "../../data";

const TechnologiesList = () => {
    return (
       <div className="tl">
           <div className="tl-texts">
               <h1 className="tl-title">Skills</h1>
               <p className="tl-desc">
                   These are technologies I understand and I can work with.
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
       </div>
    );
}

export default TechnologiesList;