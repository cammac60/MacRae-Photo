import React from 'react';

import './Photo.scss';

export const Photo = props => {
  const { image, changeImage } = props;
  const url = `../../images/main/${image.link}.JPG`;

  const photoWrapper = () => {
    
  };

  return (
    <div className="Photo">
      <div className="photo-back">

      </div>
    </div>
  )
};

export default Photo;
