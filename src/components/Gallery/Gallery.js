import React from 'react';
import { Link } from 'react-router-dom';

import './Gallery.scss';

export const Gallery = props => {
  const { images } = props;
  console.log(images);
  const imagesTiles = images.map((img, i) => {
    const url = `../../images/main/${img.link}.JPG`
    return (
        <img alt={`Photo #${i}`} id={i} className="gallery-tile" src={require(`../../images/main/${img.link}.JPG`)}/>
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
              <a className="ig-link" href="https://www.instagram.com/macrae_5280/?hl=en" target="_blank">
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
