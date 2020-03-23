import React from 'react';
import { Link } from 'react-router-dom';

import './About.scss';

export const About = () => {
  return (
    <div className="About">
      <div className="about-back">
        <div className="blur-wrapper">
          <div className="about-wrapper">
            <div className="bio-wrapper">
              <img alt="Photo of Cameron MacRae" className="profile-img" src={require('../../images/IMG_5947.jpg')} />
              <div className="bio-text-wrapper">
                <p className="bio-text">
                I am a hobbyist photographer based in Denver, Colorado who specializes in landscape and cityscape. My passion for photography comes from my love of travelling and geography. Being able to document the world around me inspires me to see as much as possible and to step outside of my comfort zone. Some of my bucket list locations to shoot are Japan, San Marino, Morocco, New Zealand, Chile, and Nepal among many others.
                </p>
                <br/>
                <p className="bio-text">
                I generally don’t shoot with a theme in mind but I enjoy distoring my photos and using unorthodox angles to create simple and somewhat minimalistic compositions. Although I typically shoot landscape and cityscape I also enjoy street, fine art, portraiture, and journalistic photography.
                </p>
                <br/>
                <p className="bio-text">
                Outside of photography I work as a software engineer and enjoy weight lifting, hiking, and hockey.
                </p>
              </div>
            </div>
            <div className="bio-footer">
              <h2 className="bio-name">Cameron MacRae</h2>
              <Link to="/" className="back-btn">Back</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;
