import React from 'react';
import './technologies.css';

   
const Technologies = ({img, title }) => {
    return (
        <div className="technologies">
            <img src={img} alt="" className="t-img" />
            <p className="t-title">{title}</p>
        </div>
        );
    }
 

export default Technologies;