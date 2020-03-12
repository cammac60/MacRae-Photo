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
      selectedImg: null
    };
  }

  componentDidMount = () => {
    document.title = 'MacRae Photo';
  };

  changeColor = hex => {
    this.setState({selectedColor: hex});
  };

  render = () => {

    const { selectedColor } = this.state;

    return (
      <div className="App">
        <Route exact path="/" render={()=>
          <Splash
          selectedColor={selectedColor}
          changeColor={this.changeColor}
          />}
        />
      </div>
    );
  };
}

export default withRouter(App);
