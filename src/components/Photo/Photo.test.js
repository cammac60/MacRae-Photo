import React from 'react';
import { shallow } from 'enzyme';
import Photo from './Photo';

describe('Photo', () => {

  const changeImage = jest.fn();
  const handleArrowClick = jest.fn();
  let wrapper, instance;
  const mockProps = {
    changeImage,
    handleArrowClick,
    curImgId: 1,
    image: {
      title: 'test',
      location: 'test',
      link: '25',
      landscape: false
    }
  };

  beforeEach(() => {
    wrapper = shallow(<Photo {...mockProps}/>);
    instance = wrapper.instance();
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


});
