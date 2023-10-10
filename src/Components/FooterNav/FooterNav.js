import React from 'react';
import { navItems, socialIcons } from '../NavbarComponents';
import "./FooterNav.css";
import { Logo } from '../NavbarComponents';

const FooterNav = () => {
  return (
    <div className='footer-container'>
        <div className='footer-nav-container'>
            <div className='footer-navigation'>
                {navItems.map(({name, id}) => (
                    <a className='footer-nav-items' href={id}>{name}</a>
                ))}
            </div>
            <div className='footer-socials'>
                {socialIcons.map((icon) => (
                    <a className='footer-social-icon' href="https://github.com/nosianuri">
                        {icon}
                    </a>
                ))}
            </div>
        </div>
        <div className='footer-logo-container'>
            {Logo}
        </div>
        <h6>Copyright ©2023 Nosia-Nuri All rights reserved.</h6>
    </div>
  )
}

export default FooterNav