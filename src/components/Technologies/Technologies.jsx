import React from 'react';
import './technologies.css';

   
const Technologies = ({img, title }) => {
    return (
        <div className="technologies">
            <img src={img} alt="" className="t-img" />
            <div className="container">
              <div className="title">
               <p className="t-title">{title}</p>
              </div>
            </div>
        </div>
        );
    }
 

export default Technologies;