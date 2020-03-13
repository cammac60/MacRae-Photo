import React from 'react';
import { Link } from 'react-router-dom';

import './Splash.scss';

export const Splash = props => {
  return (
    <div className="Splash">
      <div className="splash-back">
        <div className="blur-wrapper">
          <div className="menu-wrapper">
          <img className="contain-img" src={require('../../images/main/rmnp-road2.JPG')} />

          </div>
        </div>
      </div>
    </div>
  )
};

export default Splash;
