import React from 'react';
import { shallow } from 'enzyme';
import About from './About';

describe('About', () => {

  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<About />);
    instance = wrapper.instance();
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
