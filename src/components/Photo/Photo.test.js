import React from 'react';
import { shallow } from 'enzyme';
import Photo from './Photo';

describe('Photo', () => {

  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<Photo />);
    instance = wrapper.instance();
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
