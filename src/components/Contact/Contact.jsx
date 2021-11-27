import React from 'react';
import "./contact.css";
import { useRef, useState } from "react";
import emailjs from 'emailjs-com';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

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
                   <h1 className="c-title">Interested in hiring me?</h1>
                   <div className="c-info">
                       <div className="c-info-item">
                       <FontAwesomeIcon icon={faPhone} alt="" className="c-icon" />
                             +1 646 932 1024
                       </div>
                       <div className="c-info-item">
                       <FontAwesomeIcon icon={faEnvelope} alt="" className="c-icon" />
                            aleksandravslomska@gmail.com
                       </div>
                       <div className="c-info-item">
                       <FontAwesomeIcon icon={faGithub} alt="" className="c-icon" />
                           Github
                       </div>
                       <div className="c-info-item">
                       <FontAwesomeIcon icon={faLinkedinIn} alt="" className="c-icon" />
                           LinkedIn
                       </div>
                   </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Say Hi to me and Kion!</b> Get in touch with me.
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