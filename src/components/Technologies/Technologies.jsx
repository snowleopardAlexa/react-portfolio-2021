import React from 'react';
import './technologies.css';

   
const Technologies = ({img, title }) => {
    return (
        <div className="technologies">
            <img src={img} alt="" className="t-img" />
            <div className="container">
            <p className="t-title">{title}</p>
            </div>
        </div>
        );
    }
 

export default Technologies;