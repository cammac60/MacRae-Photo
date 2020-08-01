import React, { Component }from 'react';
import { Link } from 'react-router-dom';

import './Gallery.scss';


export class Gallery extends Component {
  state = {
    photoNumber: '',
    images: [],
  }

  renderImages = () => {
    const images = [];
    const { photoNumber } = this.state;
    const { handleImgClick } = this.props;

    for (let i = 0; i < photoNumber; i++) {
      const image = (
        <div className="blur-wrapper-3" key={i}>
          <img
            alt="cat"
            id={`cool-photo-${i}`}
            className="gallery-tile"
            src="https://cataas.com/c/gif/s/Hello?"
            onClick={e => handleImgClick(e)}
          />
        </div>
      );
      images.push(image);
    }
    this.setState({ images });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.renderImages();
  }

  render() {
    const { photoNumber, images } = this.state;

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
            <form
              onSubmit={this.handleSubmit}
              style={{
                width: '400px',
                margin: 'auto',
                marginTop: '40px',
              }}
            >
              <input
                type="number"
                onChange={this.handleChange}
                name="photoNumber"
                placeholder="Add a large number..."
                value={photoNumber}
                style={{
                  width: '100%',
                  color: 'black',
                  height: '40px',
                  fontSize: '35px'
                }}
              />
              <input
                type="submit"
                value="DO SOMETIHNG AMAZING!"
                style={{
                  color: 'black',
                  display: 'block',
                  width: '100%',
                  height: '30px',
                  backgroundColor: 'chartreuse'
                }}
              />
            </form>
            <section className="photo-wrapper">
              {images && images.length > 0 && images}
            </section>
          </div>
        </div>
      </div>
    );
  };
};

export default Gallery;
