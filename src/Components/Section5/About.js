import React from 'react';
import './About.css';
import avatar from "../../images/avatar.png";
import Calendy from '../Calendy/Calendy';

const About = () => {
    return (
        <div className='about-me-container'>
            <h2>Let's Book a call, <br /> So that we can discuss about next step:</h2>
            <div className='about-me-content'>
                <div className='about-me-avatar'>
                    <img src={avatar} alt="" />
                    <p>
                        <strong>@Justnosia:</strong> As a Web developer, I have a passion for learning and sharing my knowledge with others as publicly as possible. I love to solve real world problems. I enjoy working with CSS, ReactJS, JavaScript as well as node.js. I have also knowledge on project management.
                    </p>
                </div>
                <div className='about-me-calender'>
                    <Calendy />
                </div>
            </div>


        </div>
    )
}

export default About