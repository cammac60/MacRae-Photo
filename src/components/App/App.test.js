import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App.js';

describe('App', () => {

  const push = jest.fn();
  let wrapper, instance;
  const mockEvent = {
    target: {
      id: 'prev'
    }
  };
  const mockProps = {
    history: {
      push
    }
  };

  beforeEach(() => {
    wrapper = shallow(<App {...mockProps}/>);
    instance = wrapper.instance();
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


  describe('changeColor', () => {

    it('Should change the selectedColor in state', () => {
      instance.changeColor('#000000');
      expect(instance.state.selectedColor).toBe('#000000');
    });

  });


  describe('changeImage', () => {

    it('Should change the image link', () => {
      instance.changeImage(0);
      expect(instance.state.selectedImg).toEqual({
        "landscape": false,
        "link": "25",
        "location": "Denver, Colorado",
        "title": "Rush Hour"
      });
    });

  });


  describe('handleImgClick', () => {

    it('Should call the changeImage method with the correct argument', () => {
      instance.changeImage = jest.fn();
      instance.handleImgClick(mockEvent);
      expect(instance.changeImage).toHaveBeenCalledWith('prev');
    });

  });


  describe('checkImgPosition', () => {

    it('Should return the length of the images array minus 1 if the page is one and the id is prev', () => {
      const num = instance.checkImgPosition('prev', 1);
      expect(num).toEqual(38);
    });

    it('Should return 0 if the page is equal to the length of the images array and the id is next', () => {
      const num = instance.checkImgPosition('next', 39);
      expect(num).toEqual(0);
    });

    it('Should return false if none of the previous conditions are met', () => {
      const num = instance.checkImgPosition('prev', 39);
      expect(num).toBe(false);
    });

  });


  describe('handleArrowClick', () => {

    it('Should call changeImage with an argument of 0 and changePage with an argument of 1 if the id is next and the current page is equal to the length of the images array', () => {
      instance.changeImage = jest.fn();
      instance.changePage = jest.fn();
      instance.handleArrowClick({
        target: {
          id: 'next'
        }
      }, 39);
      expect(instance.changeImage).toHaveBeenCalledWith(0);
      expect(instance.changePage).toHaveBeenCalledWith(1);
    });

    it('Should call changeImage with an argument of page -2 and changePage with page - 1 if the page does not equal 1 and the id equals prev', () => {
      instance.changeImage = jest.fn();
      instance.changePage = jest.fn();
      instance.handleArrowClick({
        target: {
          id: 'prev'
        }
      }, 39);
      expect(instance.changeImage).toHaveBeenCalledWith(37);
      expect(instance.changePage).toHaveBeenCalledWith(38);
    });

    it('Should call pass the curPage argument to changeImage and the curPage argument + 1 to changePage in any other circumstance', () => {
      instance.changeImage = jest.fn();
      instance.changePage = jest.fn();
      instance.handleArrowClick({
        target: {
          id: 'next'
        }
      }, 22);
      expect(instance.changeImage).toHaveBeenCalledWith(22);
      expect(instance.changePage).toHaveBeenCalledWith(23);
    });

  });


  describe('validatePhotoUrl', () => {

    it('Should return a JSX photo element if the image exists', () => {
      const mockParams = {
        params: {
          id: 20
        }
      };
      const elem = instance.validatePhotoUrl(mockParams);
      expect(elem).toBeDefined();
    });

    it('Should call props.history.push with the corrrect argument if the image does not exist', () => {
      const mockParams = {
        params: {
          id: 200
        }
      };
      instance.validatePhotoUrl(mockParams);
      expect(instance.props.history.push).toHaveBeenCalledWith('/gallery');
    });

  });


});
