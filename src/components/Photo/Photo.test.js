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
  let mockEvent = {
    target: {
      id: 'prev'
    }
  };

  beforeEach(() => {
    wrapper = shallow(<Photo {...mockProps}/>);
    instance = wrapper.instance();
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call handleArrowClick with the correct arguments when the back button is clicked', () => {
    wrapper.find('#prev').simulate('click', mockEvent);
    expect(handleArrowClick).toHaveBeenCalledWith(mockEvent, 1);
  });

  it('Should call handleArrowClick with the correct arguments when the next button is clicked', () => {
    wrapper.find('#next').simulate('click', mockEvent);
    expect(handleArrowClick).toHaveBeenCalledWith(mockEvent, 1);
  });

});
