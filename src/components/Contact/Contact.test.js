import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';

import { postMessage } from '../../apiCalls';

jest.mock('../../apiCalls');

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
    postMessage.mockImplementation(() => {
      return Promise.resolve({id: 1});
    });
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should invoke the handleChange on keyup of the email field', () => {
    instance.handleChange = jest.fn();
    wrapper.find('#email').simulate('change', mockEvent);
    expect(instance.handleChange).toHaveBeenCalled();
  });

  it('Should invoke the handleChange method on keyup of the message field', () => {
    instance.handleChange = jest.fn();
    wrapper.find('#message').simulate('change', mockEvent);
    expect(instance.handleChange).toHaveBeenCalled();
  });

  it('Should invoke the handle submit method onClick of the submit button', () => {
    instance.handleSubmit = jest.fn();
    wrapper.find('.contact__button').simulate('click');
    expect(instance.handleSubmit).toHaveBeenCalled();
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
        popUpEnabled: false,
        buttonDisabled: false
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


  describe('validateSubmit', () => {

    it('Should return true and clear the error message if a valid email and a message are in state', () => {
      instance.state = {
        email: 'test@test.test',
        message: 'test',
        error: 'error',
        popUpEnabled: false
      };
      instance.validateSubmit();
      expect(instance.validateSubmit()).toBeTruthy();
      expect(instance.state.error).toEqual('');
    });

    it('Should add the correct error message to state and return false if the email address is invalid', () => {
      instance.state = {
        email: 'test@t',
        message: 'test',
        error: '',
        popUpEnabled: false
      };
      instance.validateSubmit();
      expect(instance.validateSubmit()).toBeFalsy();
      expect(instance.state.error).toEqual('Please enter a message and a valid email.');
    });

    it('Should add the correct error message to state and return false if the message is not entered', () => {
      instance.state = {
        email: 'test@test.test',
        message: '',
        error: '',
        popUpEnabled: false
      };
      instance.validateSubmit();
      expect(instance.validateSubmit()).toBeFalsy();
      expect(instance.state.error).toEqual('Please enter a message and a valid email.');
    });

  });


  describe('handleSubmit', () => {

    it('Should call clearState if the submission is validated and the promise resolves.', async () => {
      instance.state = {
        email: 'test@test.test',
        message: 'test',
        error: '',
        popUpEnabled: false
      };
      instance.clearState = jest.fn();
      await instance.handleSubmit();
      expect(instance.clearState).toHaveBeenCalled();
    });

    it('Should add the correct error message to state if the promise rejects', async () => {
      instance.state = {
        email: 'test@test.test',
        message: 'test',
        error: '',
        popUpEnabled: false
      };
      postMessage.mockImplementation(() => {
        return Promise.reject();
      });
      await instance.handleSubmit();
      expect(instance.state.error).toEqual('There was a problem sending your message - Please try again.');
    });

  });


  describe('clearState', () => {

    it('Should clear the state and change popUpEnabled to true', () => {
      instance.state = {
        email: 'test@test.test',
        message: 'test',
        error: 'error',
        popUpEnabled: false
      };
      instance.clearState();
      expect(instance.state).toEqual({
        email: '',
        message: '',
        error: '',
        popUpEnabled: true
      });
    });

  });


  describe('closePopup', () => {

    it('Should change popUpEnabled to false', () => {
      instance.state = {
        email: '',
        message: '',
        error: '',
        popUpEnabled: true
      };
      instance.closePopup();
      expect(instance.state.popUpEnabled).toBeFalsy();
    });

  });


});
