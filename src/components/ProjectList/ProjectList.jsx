import React from 'react';
import './projectlist.css';
import Project from "../Project/Project";
import { projects } from "../../data/projects";


const ProjectList = () => {
    return (
       <div className="pl">
           <div className="pl-texts">
               <h1 className="pl-title">Projects</h1>
               <p className="pl-desc">
                   These projects are made with React.
               </p>
           </div>
           <div className="pl-list">
               {projects.map((item) => (
                  <Project 
                    key={item.id} 
                    img={item.img} 
                    link={item.link} 
                    number={item.number}
                    title={item.title}
                  />
               ))}
           </div>
       </div>
    )
}

export default ProjectList;