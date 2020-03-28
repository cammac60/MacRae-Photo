import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.scss';

import { Contact } from '../Contact/Contact';
import { Gallery } from '../Gallery/Gallery';
import { Photo } from '../Photo/Photo';
import { About } from '../About/About';
import { Splash } from '../Splash/Splash';
import { Loader } from '../Loader/Loader';

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

  changeImage = id => {
    this.setState({
      selectedImg: images[id]
    });
  };

  handleImgClick = ({ target }) => {
    const { id } = target;
    this.changeImage(id);
    this.props.history.push(`/photos/${parseInt(id) + 1}`);
  };

  checkImgPosition = (id, page) => {
    if (parseInt(page) === 1 && id === 'prev') {
      return images.length - 1;
    } if (parseInt(page) === images.length && id === 'next') {
        return 0;
    } else {
        return false;
    }
  };

  changePage = num => {
    this.props.history.push(`/photos/${num}`);
  };

  handleArrowClick = ({ target }, curPage) => {
    const { id } = target;
    const positionCheck = this.checkImgPosition(id, curPage);
    let index;
    if (positionCheck === 0 || positionCheck) {
      this.changeImage(positionCheck);
      this.changePage(parseInt(index) + 1);
      return;
    }
    if (parseInt(curPage) !== 1 && id === 'prev') {
        index = parseInt(curPage) - 2;
        this.changeImage(index);
        this.changePage(parseInt(index) + 1);
        return;
    } else {
        index = parseInt(curPage);
        this.changeImage(index);
        this.changePage(parseInt(index) + 1);
    }
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
        <Route path="/photos/:id" render={({ match }) =>
          selectedImg ?
          <Photo
            image={selectedImg}
            changeImage={this.changeImage}
            curImgId={match.params.id}
            handleArrowClick={this.handleArrowClick}
          /> :
          <Loader />
        } />
      </div>
    );
  };
}

export default withRouter(App);
