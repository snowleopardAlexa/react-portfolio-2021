import React from 'react';
import './technologies.css';

   
const Technologies = ({img, title }) => {
    return (
        <div className="technologies">
            <img src={img} alt="" className="p-img" />
            <p className="p-title">{title}</p>
        </div>
        );
    }
 

export default Technologies;