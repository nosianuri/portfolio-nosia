import React from 'react';
import './Brand.css';
import netflix from "../../images/brands/netflix.svg";
import nestle from "../../images/brands/Nestlé.svg";
import amexpress from "../../images/brands/am-express.svg";
import canon from "../../images/brands/canon.svg";
import figma from "../../images/brands/figma.svg";
import starbucks from "../../images/brands/starbucks.svg";
import dot from "../../images/brands-dot.svg";

const Brand = () => {
    const brandLogoList = [figma, , netflix, nestle, amexpress, canon, starbucks];
    return (
        <div className='brands-container'>
            <div className='brand-heading'>
                <h2>Looking for a challenging role in a reputable organization to utilize my web development skills for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the IT sector.</h2>
                <img src={dot} alt="" />
            </div>
            <div className='brand-logo-list'>
                {brandLogoList.map((logo) => (<div className='brand-logo-container'>
                    <img className='brand-logo' src={logo} alt="" />
                </div>))}
            </div>
        </div>
    )
}

export default Brand;