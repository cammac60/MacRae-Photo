import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.scss';

import { Contact } from '../Contact/Contact';
import { Gallery } from '../Gallery/Gallery';
import { Photo } from '../Photo/Photo';
import { About } from '../About/About';
import { Splash } from '../Splash/Splash';

import { images } from '../../data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedColor: '#ffffff',
      selectedImg: {}
    };
  }

  componentDidMount = () => {
    document.title = 'MacRae Photo';
  };

  changeColor = hex => {
    this.setState({selectedColor: hex});
  };

  changeImage = img => {
    this.setState({
      selectedImg: img
    });
  };

  handleImgClick = id => {
    let selectedImg = images[id];
    console.log(selectedImg);
    this.changeImage(selectedImg);
  };

  render = () => {

    const { selectedColor, selectedImg } = this.state;

    return (
      <div className="App">
        <Route exact path="/" render={()=>
          <Splash
          selectedColor={selectedColor}
          changeColor={this.changeColor}
          />
        } />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route exact path="/gallery" render={() =>
          <Gallery
            images={images}
            handleImgClick={this.handleImgClick}
          />
        } />
        <Route path="/photos/:id" render={() => <Photo />} />
      </div>
    );
  };
}

export default withRouter(App);
