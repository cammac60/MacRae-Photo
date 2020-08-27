import React from 'react';
import { Link } from 'react-router-dom';

import './Splash.scss';

export const Splash = props => {
  const { selectedColor, changeColor } = props;

  return (
    <div className="Splash">
      <div className="splash__background">
        <div className="blur-wrapper">
          <div className="splash__menu">
          <div className="splash__text">
            <h1 className="splash__title" style={{color: selectedColor}}>MacRae Photo</h1>
            <div className="splash__options-wrapper">
              <div className="splash__link-wrapper">
                <Link
                  className="splash__link"
                  id="photo-link"
                  to="/gallery"
                  onMouseEnter={() => changeColor('#FFD700')}
                  onMouseLeave={() => changeColor('#ffffff')}
                >
                  Photos
                </Link>
                <Link
                  className="splash__link"
                  id="about-link"
                  to="/about"
                  onMouseEnter={() => changeColor('#4FD5FF')}
                  onMouseLeave={() => changeColor('#ffffff')}
                >
                  About
                </Link>
                <Link
                  className="splash__link"
                  id="contact-link"
                  to="/contact"
                  onMouseEnter={() => changeColor('#FF7373')}
                  onMouseLeave={() => changeColor('#ffffff')}
                >
                  Contact
                </Link>
              </div>
              <a className="splash__ig-link" href="https://www.instagram.com/macrae_5280/?hl=en" target="_blank" rel="noopener noreferrer">
                <img alt="Instagram Logo" src={require('../../images/icons/instagram.svg')} className="splash__ig-logo" fill="#ffffff"/>
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
