import React from 'react';
import { Link } from 'react-router-dom';

import './Gallery.scss';

export const Gallery = props => {
  const { images, handleImgClick } = props;
  const imagesTiles = images.map((img, i) => {
    return (
        <div className="blur-wrapper-3" key={i}>
          <img
            alt={img.title}
            id={i}
            className="gallery-tile"
            src={require(`../../images/main/${img.link}.JPG`)}
            onClick={e => handleImgClick(e)}
            key={i}
          />
        </div>
    )
  });

  return (
    <div className="Gallery">
      <div className="gallery-back">
        <div className="blur-wrapper-2">
          <header className="gallery-header">
            <h2 className="gallery-title">Gallery</h2>
            <div className="gallery-btn-wrapper">
              <Link to="/" className="back-btn" id="gallery-back-btn">Back</Link>
              <a className="ig-link" href="https://www.instagram.com/macrae_5280/?hl=en" target="_blank" rel="noopener noreferrer">
                <img alt="Instagram Logo" src={require('../../images/icons/instagram.svg')} className="ig-logo-2" fill="#ffffff"/>
              </a>
            </div>
          </header>
          <section className="photo-wrapper">
            {imagesTiles}
          </section>
        </div>
      </div>
    </div>
  )
};

export default Gallery;
