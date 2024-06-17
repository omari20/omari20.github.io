import React from 'react';
import './intro.css';
import bg from '../../assets/Me.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Marieri</span> <br />Business Intelligence Analyst</span>
                <p className="introPara">I am a certified Business Analyst, skilled at creating<br />compelling user-centred, data driven solutions.</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/> Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;