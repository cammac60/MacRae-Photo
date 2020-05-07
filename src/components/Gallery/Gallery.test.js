import React from 'react';
import { shallow } from 'enzyme';
import Gallery from './Gallery';

describe('Gallery', () => {

  let wrapper, instance;
  const handleImgClick = jest.fn();
  const mockProps = {
    handleImgClick,
    images: [{
      title: 'test',
      link: '25'
    }]
  };

  beforeEach(() => {
    wrapper = shallow(<Gallery {...mockProps}/>);
    instance = wrapper.instance();
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should invoke handleImgClick onClick of the image', () => {
    wrapper.find('.gallery-tile').simulate('click', {});
    expect(handleImgClick).toHaveBeenCalled();
  });

});
