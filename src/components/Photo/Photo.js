import React from 'react';
import { Link } from 'react-router-dom';

import './Photo.scss';

export const Photo = props => {
  const { image, changeImage } = props;
  const url = `../../images/main/${image.link}.JPG`;

  const imageCtrl =
    <div className="image-ctrl">
      <img className="arrow" src={require('../../images/icons/left-arrow.svg')} id="prev" alt="Previous icon"/>
      <img className="arrow" src={require('../../images/icons/right-arrow.svg')} id="next" alt="Next icon"/>
    </div>;

  let landscapeWrap =
    <div className="landscape-wrap">
      <div className="landscape-photo-wrap">
        <div className="landscape-title-wrap">
          <h2 className="photo-title">{image.title}</h2>
          <span className="photo-location">{image.location}</span>
        </div>
        <img alt={image.title} src={require(`../../images/main/${image.link}.JPG`)} className="landscape-photo"/>
        {imageCtrl}
      </div>
      <Link to="/gallery" className="photo-back-btn" id="photo-back-btn">Back</Link>
    </div>;

  let portWrap =
    <div className="port-wrap">
      <img alt={image.title} src={require(`../../images/main/${image.link}.JPG`)} className="port-photo"/>
      {imageCtrl}
      <div className="port-text-wrap">
        <div className="port-title-wrap">
          <h2 className="photo-title">{image.title}</h2>
          <span className="photo-location">{image.location}</span>
        </div>
        <Link to="/gallery" className="photo-back-btn">Back</Link>
      </div>
    </div>;

  return (
    <div className="Photo">
      <div className="photo-back">
        {image.landscape ? landscapeWrap : portWrap}
      </div>
    </div>
  )
};

export default Photo;
