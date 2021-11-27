import React from 'react';
import './technologieslist.css';
import Technologies from "../Technologies/Technologies";
import {technologies} from "../../data";

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
                      number={item.number}
                      title={item.title}
                   />
               ))}
           </div>
       </div>
    );
}

export default TechnologiesList;