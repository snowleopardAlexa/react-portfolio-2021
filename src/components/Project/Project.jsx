import React from 'react';
import './project.css';

const Project = ({img, link, title, number, subtitle}) => {
    return (
        <div className="project">
           <div className="p-browser">
               <div className="p-circle"></div>
               <div className="p-circle"></div>
               <div className="p-circle"></div>
           </div>
           <a href={link} target="_blank" rel="noreferrer">
            <img src={img} alt="" className="p-img" />
            <p className="p-title">{number} . {title}</p>
           </a>
        </div>
    );
}

export default Project;