import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './App.scss';


class App extends Component {
  constructor() {
    super();
    this.state = {

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
  }
}

export default App;
