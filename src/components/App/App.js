import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.scss';

import { Contact } from '../Contact/Contact';
import { Gallery } from '../Gallery/Gallery';
import { Photo } from '../Photo/Photo';
import { About } from '../About/About';
import { Splash } from '../Splash/Splash';

import { images } from '../../data';

export class App extends Component {
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
    let page = parseInt(curPage);
    if (positionCheck === 0 || positionCheck) {
      this.changeImage(positionCheck);
      this.changePage(positionCheck + 1);
      return;
    } if (page !== 1 && id === 'prev') {
        this.changeImage(page - 2);
        this.changePage(page - 1);
        return;
    } else {
        this.changeImage(page);
        this.changePage(page + 1);
    }
  };

  validatePhotoUrl = ({ params }) => {
    const { id } = params;
    if (images[id - 1]) {
      return (
        <Photo
          image={images[id - 1]}
          changeImage={this.changeImage}
          curImgId={id}
          handleArrowClick={this.handleArrowClick}
        />
      )
    } else {
        this.props.history.push('/gallery');
    }
  };

  render = () => {

    const { selectedColor, selectedImg } = this.state;

    return (
      <div className="App" onContextMenu={(e)=> e.preventDefault()}>
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
          selectedImg.link ?
          <Photo
            image={selectedImg}
            curImgId={match.params.id}
            handleArrowClick={this.handleArrowClick}
          /> :
          this.validatePhotoUrl(match)
        } />
      </div>
    );
  };
}

export default withRouter(App);
