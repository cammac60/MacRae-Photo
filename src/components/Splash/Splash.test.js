import React from 'react';
import { shallow } from 'enzyme';
import Splash from './Splash';

describe('Splash', () => {

  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<Splash />);
    instance = wrapper.instance();
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
