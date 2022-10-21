import React from 'react'
import PortfolioProjects from '../../Components/Section3/PortfolioCards/PortfolioProjects';
import './PortfolioPage.css';

function PortfolioPage() {
  return (
    <div className='pp-container'>
      <h1>Take a look at all of my projects <br /> this are all real projects from all over the world</h1>
      <PortfolioProjects />
    </div>
  )
}

export default PortfolioPage;