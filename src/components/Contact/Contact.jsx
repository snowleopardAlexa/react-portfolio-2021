import React from 'react';
import "./contact.css";
import phone from "../../img/phone.png";
import email from "../../img/email.png";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import { useRef, useState } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {

const formRef = useRef();
const [done, setDone] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm (
        'service_e4642ge', 
        'template_xea1xl7', 
        formRef.current, 
        'user_5MeFGxb4xCxqPSFWtic4i')
    .then((result) => {
        console.log(result.text);
        setDone(true);
    }, (error) => {
        console.log(error.text);
    });
}

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
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && <p className="sent-msg">"Grrrrrr! Kion The Lion King says that your email has been sent!"</p> }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;