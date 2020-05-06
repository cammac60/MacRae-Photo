import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';

describe('Contact', () => {

  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<Contact />);
    instance = wrapper.instance();
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


  describe('handleChange', () => {

    it('Should change state based on ')
  });


});
