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
                I am a hobbyist photographer based in Denver, CO who specializes in landscape and cityscape. My passion for photography comes from my love of travelling and geography. Being able to document the world around me inspires me to see as much as possible and to step outside of my comfort zone.
                </p>
                <p className="bio-text">
                I generally don’t shoot with a “theme” in mind but I enjoy distoring my photos and using unorthodox angles to create simple and somewhat minimalistic compositions.
                </p>
                <p className="bio-text">
                Outside of photography I work as a software engineer and enjoy weight lifting, hiking, and hockey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;
