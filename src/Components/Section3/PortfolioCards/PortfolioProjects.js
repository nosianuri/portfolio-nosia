import React from 'react';
import { protfolioList } from '../ProtfolioList';
import "./PortfolioProjects.css";

const PortfolioProjects = ({ items }) => {
    const limit = items ? items : protfolioList.length;
  return (
    <div>
        <div className='projects-container'>
            {protfolioList.slice(0, limit).map(({name, img, link}) => <a className='project-card' href={link} target="_blank" rel='noreferrer noopener'>
                <div className='project-img-container'>
                    <img className='project-img' src={img} alt="" />
                </div>
                <div className='project-card-title'>
                    <h2>{name}</h2>
                </div>
            </a> )}
        </div>
    </div>
  )
};

export default PortfolioProjects;