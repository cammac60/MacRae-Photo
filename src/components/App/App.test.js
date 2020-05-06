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

  describe('handleImgClick', () => {

    it('Should call the changeImage method with the correct argument', () => {
      instance.changeImage = jest.fn();
      instance.handleImgClick(mockEvent);
      expect(instance.changeImage).toHaveBeenCalledWith('4');
    });

  });

});
