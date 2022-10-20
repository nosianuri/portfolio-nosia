import React from 'react';
import './Brand.css';
import dot from "../../images/brands-dot.svg";

const Brand = () => {
    // const brandLogoList = [figma,, netflix, nestle, amexpress, canon, starbucks];
  return (
    <div className='brands-container'>
        <div className='brand-heading'>
            <h2>I am proud to have these amazing brands as my Clients</h2>
            <img src={dot} alt="" />
        </div>
    </div>
  )
}

export default Brand