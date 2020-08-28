import React from 'react';
import { shallow } from 'enzyme';
import Popup from './Popup';

describe('Popup', () => {

  let wrapper, instance;
  const closePopup = jest.fn();
  const mockProps = {
    closePopup
  };

  beforeEach(() => {
    wrapper = shallow(<Popup {...mockProps}/>);
    instance = wrapper.instance();
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should invoke the closePopup method when the close button is clicked', () => {
    wrapper.find('.popup__button').simulate('click');
    expect(closePopup).toHaveBeenCalled();
  });

});
