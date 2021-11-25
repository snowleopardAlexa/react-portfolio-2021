import React from 'react';
import "./contact.css";
import phone from "../../img/phone.png";
import email from "../../img/email.png";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";

const Contact = () => {
    return (
        <div className="contact">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                   <h1 className="c-title">Lets discuss your project</h1>
                   <div className="c-info">
                       <div className="c-info-item">
                           <img 
                             src=""
                             alt=""
                             className="c-icon"
                            />
                       </div>
                       <div className="c-info-item">
                           <img src={phone} alt="" className="c-icon" />
                             +1 1234 5556 890
                       </div>
                       <div className="c-info-item">
                           <img className="c-icon" src={email} alt="" />
                           contact@gmail.com
                       </div>
                       <div className="c-info-item">
                           <img className="c-icon" src={github} alt="" />
                           Github
                       </div>
                       <div className="c-info-item">
                           <img className="c-icon" src={linkedin} alt="" />
                           Github
                       </div>
                   </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story</b>Get in touch with me.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact;