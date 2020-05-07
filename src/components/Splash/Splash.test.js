import React from 'react';
import { shallow } from 'enzyme';
import Splash from './Splash';

describe('Splash', () => {

  let wrapper, instance;
  const changeColor = jest.fn();
  const mockProps = {
    changeColor
  };

  beforeEach(() => {
    wrapper = shallow(<Splash {...mockProps}/>);
    instance = wrapper.instance();
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should change the color when the cursor enters the photos link', () => {
    wrapper.find('#photo-link').simulate('mouseEnter');
    expect(changeColor).toHaveBeenCalledWith('#FFD700');
  });

  it('Should change the color when the cursor enters the about link', () => {
    wrapper.find('#about-link').simulate('mouseEnter');
    expect(changeColor).toHaveBeenCalledWith('#4FD5FF');
  });

  it('Should change the color when the cursor enters the contact link', () => {
    wrapper.find('#contact-link').simulate('mouseEnter');
    expect(changeColor).toHaveBeenCalledWith('#FF7373');
  });

});
