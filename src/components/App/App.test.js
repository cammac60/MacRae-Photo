import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App.js';

describe('App', () => {

  const push = jest.fn();
  let wrapper, instance;
  const mockEvent = {
    target: {
      id: '4'
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
      expect(instance.changeImage).toHaveBeenCalledWith('4');
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

});
