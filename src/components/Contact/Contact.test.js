import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';

describe('Contact', () => {

  let wrapper, instance;

  const mockEvent = {
    target: {
      id: 'email',
      value: 'test@test.test'
    }
  };

  beforeEach(() => {
    wrapper = shallow(<Contact />);
    instance = wrapper.instance();
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


  describe('handleChange', () => {

    it('Should change state based on the id and value of the argument', () => {
      const mockEventTwo = {
        target: {
          id: 'message',
          value: 'test'
        }
      };
      instance.handleChange(mockEvent);
      instance.handleChange(mockEventTwo);
      expect(instance.state).toEqual({
        email: 'test@test.test',
        message: 'test',
        error: '',
        popUpEnabled: false
      });
    });

  });


  describe('validateEmail', () => {

    it('Should return true if a valid email is in state', () => {
      instance.handleChange(mockEvent);
      expect(instance.validateEmail()).toEqual(true);
    });

    it('Should return false if an invalid email is in state', () => {
      const mockEventTwo = {
        target: {
          id: 'email',
          value: 'test@'
        }
      };
      instance.handleChange(mockEventTwo);
      expect(instance.validateEmail()).toEqual(false);
    });

  });


});
