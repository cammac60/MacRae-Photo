import React from 'react';
import { Link } from 'react-router-dom';

import './Splash.scss';

export const Splash = props => {
  const { selectedColor, changeColor } = props;

  return (
    <div className="Splash">
      <div className="splash-back">
        <div className="blur-wrapper">
          <div className="menu-wrapper">
          <div className="text-wrapper">
            <h1 style={{color: selectedColor}}>MacRae Photo</h1>
            <div className="options-wrapper-lrg">
              <div className="link-wrapper">
                <Link
                  className="menu-link"
                  id="photo-link"
                  to="/gallery"
                  onMouseEnter={() => changeColor('#FFD700')}
                  onMouseLeave={() => changeColor('#ffffff')}
                >
                  Photos
                </Link>
                <Link
                  className="menu-link"
                  id="about-link"
                  to="/about"
                  onMouseEnter={() => changeColor('#4FD5FF')}
                  onMouseLeave={() => changeColor('#ffffff')}
                >
                  About
                </Link>
                <Link
                  className="menu-link"
                  id="contact-link"
                  to="/contact"
                  onMouseEnter={() => changeColor('#FF7373')}
                  onMouseLeave={() => changeColor('#ffffff')}
                >
                  Contact
                </Link>
              </div>
              <a className="ig-link" href="https://www.instagram.com/macrae_5280/?hl=en" target="_blank">
                <img src={require('../../images/icons/instagram.svg')} className="ig-logo" fill="#ffffff"/>
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Splash;
