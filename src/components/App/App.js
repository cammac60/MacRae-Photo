import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.scss';

import { Contact } from '../Contact/Contact';
import { Gallery } from '../Gallery/Gallery';
import { Photo } from '../Photo/Photo';
import { About } from '../About/About';
import { Splash } from '../Splash/Splash';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedColor: '#ffffff',
      selectedImg: null,
      selectedPath: ''
    };
  }

  componentDidMount = () => {
    document.title = 'MacRae Photo';
  };

  changeColor = hex => {
    this.setState({selectedColor: hex});
  };

  changeImage = (path, id) => {
    this.setState({
      selectedImg: id,
      selectedPath: path
    });
  };

  handleImgClick = () => {
// Does the logic for grabbing from the data file live here?
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
// changeImage or handleImgClick?
          />
        } />
        <Route path="/photos/:id" render={() => <Photos />} />
      </div>
    );
  };
}

export default withRouter(App);
