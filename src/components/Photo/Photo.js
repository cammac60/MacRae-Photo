import React from 'react';

import './Photo.scss';

export const Photo = props => {
  const { image, changeImage } = props;

  return (
    <div className="Photo">
      <div className="blur-wrapper-3" styles={{backgroundImage: require(`../../images/main/${image.link}.JPG`)}}>
      </div>
    </div>
  )
};

export default Photo;
