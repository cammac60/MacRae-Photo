import React from 'react';
import { Link } from 'react-router-dom';

import './Gallery.scss';

export const Gallery = props => {
  return (
    <div className="Gallery">
      <div className="gallery-back">
        <div className="blur-wrapper">
          <header className="gallery-header">
            <h2 className="gallery-title">Gallery</h2>
            <div className="gallry-btn-wrapper">
            </div>
          </header>
        </div>
      </div>
    </div>
  )
};

export default Gallery;
