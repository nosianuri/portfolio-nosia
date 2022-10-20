import React from 'react';
import { Link } from 'react-router-dom';
import "./Portfolio.css";
import PortfolioProjects from './PortfolioCards/PortfolioProjects';

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <div className='portfolio-container'>
                <h2>Some of my works</h2>
                <div className='projects-section'>
                    <PortfolioProjects items={4} />
                </div>
                <Link to="portfolio" className="portfolio-button">
                    See More Projects
                </Link>
            </div>
        </div>
    )
}

export default Portfolio