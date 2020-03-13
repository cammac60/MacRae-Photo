import React from 'react';
import { Link } from 'react-router-dom';

import './Splash.scss';

export const Splash = props => {
  return (
    <div className="Splash">
      <div className="splash-back">
        <div className="blur-wrapper">
          <div className="menu-wrapper">
          <div className="text-wrapper">
            <h1>MacRae Photo</h1>
            <div className="options-wrapper-lrg">
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Splash;
