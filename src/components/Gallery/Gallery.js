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
            className="gallery__tile"
            src={require(`../../images/main/${img.link}.JPG`)}
            onClick={e => handleImgClick(e)}
            key={i}
          />
        </div>
    )
  });

  return (
    <div className="gallery">
      <div className="gallery__background">
        <div className="blur-wrapper-2">
          <header className="gallery__header">
            <h2 className="gallery__title">Gallery</h2>
            <div className="gallery__btn-wrapper">
              <Link to="/" className="back-btn" id="gallery__back-btn">Back</Link>
              <a className="ig-link" href="https://www.instagram.com/macrae_5280/?hl=en" target="_blank" rel="noopener noreferrer">
                <img alt="Instagram Logo" src={require('../../images/icons/instagram.svg')} className="gallery__ig-logo" fill="#ffffff"/>
              </a>
            </div>
          </header>
          <section className="gallery__photo-wrapper">
            {imagesTiles}
          </section>
        </div>
      </div>
    </div>
  )
};

export default Gallery;
