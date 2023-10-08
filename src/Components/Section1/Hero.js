import React from 'react';
import './Hero.css';
import underline from "../../images/Vector.svg";

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='hero-content'>
            <div className='hero-heading-container'>
                <h1 className='hero-heading'>
                    Hi, I'm Nosia <span>From Bangladesh</span>
                    <img className='hero-heading-underline' src={underline} alt="" />
                </h1>
                
            </div>
            <div className='hero-content-highlights'>
                <div className='hero-cards'>
                    <h2>3 Years</h2>
                    <h5>of experience</h5>
                </div>
                <div className='hero-cards'>
                    <h2>100+</h2>
                    <h5>Projects Completed</h5>
                </div>
                <div className='hero-cards'>
                    <h2>100+</h2>
                    <h5>Coding Exercises</h5>
                </div>
                <a href="../../assests/Nosia Akter3.pdf" className='hero-cards' download>
                    <h2>Download</h2>
                    <h5 >My Resume</h5>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero;