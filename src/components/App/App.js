import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
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
      selectedImg: null
    };
  }

  componentDidMount = () => {
    document.title = 'MacRae Photo';
  };

  render = () => {
    return (
      <div className="App">
      </div>
    );
  };
}

export default App;
