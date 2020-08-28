import React from 'react';
import { Link } from 'react-router-dom';

import './Photo.scss';

export const Photo = props => {
  const { image, curImgId, handleArrowClick } = props;

  const imageCtrl =
    <div className="image-ctrl">
      <img className="image-ctrl__arrow" src={require('../../images/icons/left-arrow.svg')} id="prev" alt="Previous icon" tooltip="Previous" onClick={e => handleArrowClick(e, curImgId)}/>
      <img className="image-ctrl__arrow" src={require('../../images/icons/right-arrow.svg')} id="next" alt="Next icon" tooltip="Next" onClick={e => handleArrowClick(e, curImgId)}/>
    </div>;

  let landscapeWrap =
    <div className="landscape">
      <div className="landscape__wrap">
        <div className="landscape__title-wrap">
          <h2 className="landscape__title">{image.title}</h2>
          <span className="landscape__location">{image.location}</span>
        </div>
        <img alt={image.title} src={require(`../../images/main/${image.link}.JPG`)} className="landscape__photo"/>
        {imageCtrl}
      </div>
      <Link to="/gallery" className="landscape__back-btn" >Back</Link>
    </div>;

  let portWrap =
    <div className="port">
      <img alt={image.title} src={require(`../../images/main/${image.link}.JPG`)} className="port__photo"/>
      {imageCtrl}
      <div className="port__text-wrap">
        <div className="port__title-wrap">
          <h2 className="port__title">{image.title}</h2>
          <span className="port__location">{image.location}</span>
        </div>
        <Link to="/gallery" className="port__back-btn">Back</Link>
      </div>
    </div>;

  return (
    <div className="photo">
      <div className="photo__background">
        {image.landscape ? landscapeWrap : portWrap}
      </div>
    </div>
  )
};

export default Photo;
