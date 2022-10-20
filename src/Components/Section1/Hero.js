import React from 'react';
import './Hero.css';
import underline from "../../images/Vector.svg";

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='hero-content'>
            <div className='hero-heading-container'>
                <h1 className='hero-heading'>
                    My Next Project <span>Done Right</span>
                    <img className='hero-heading-underline' src={underline} alt="" />
                </h1>
                
            </div>
            <div className='hero-content-highlights'>
                <div className='hero-cards'>
                    <h2>2 Years</h2>
                    <h5>of experience</h5>
                </div>
                <div className='hero-cards'>
                    <h2>100+</h2>
                    <h5>Projects Completed</h5>
                </div>
                <div className='hero-cards'>
                    <h2>100+</h2>
                    <h5>Clients</h5>
                </div>
                <div className='hero-cards'>
                    <h2>From 20</h2>
                    <h5>Different Countries</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero