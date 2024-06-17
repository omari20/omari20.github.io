import './contact.css';
import linkedinIcon from '../../assets/linkedin_icon_colored.png';
import emailIcon from '../../assets/email.png';
import githubIcon from '../../assets/github.512x497.png'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_z6r983b', 'template_1fubnhr', form.current, 'AfR8b2l5vFpSBUS4Y')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            }, (error) => {
                console.log(error.text);
            });
    };
    
    return (
        <div id='contactPage'>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='from_name' />
                    <input type="text" className="email" placeholder='Your Email' name='from_email' />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' ></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="linkedin" className="link" />
                    </a>
                    <a href="mailto:omarieri@gmail.com">
                            <img src={emailIcon} alt="email" className="link" />
                    </a>
                    <a href="https://github.com/omari20">
                            <img src={githubIcon} alt="github" className="link" />
                    </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;