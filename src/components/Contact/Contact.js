import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Contact.scss';

import { postMessage } from '../../apiCalls';

import { Popup } from '../Popup/Popup';

export class Contact extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      message: '',
      error: '',
      popUpEnabled: false,
      buttonDisabled: false
    }
  }

  handleChange = ({ target }) => {
    const { id, value } = target;
    this.setState({[id]: value});
    if (this.validateEmail()) {
      this.setState({error: ''});
    }
  };

  validateEmail = () => {
    return /\S+@\S+\.\S+/.test(this.state.email);
  };

  validateSubmit = () => {
    if (this.validateEmail() && this.state.message) {
      this.setState({error: ''});
      return true;
    } else {
        this.setState({error: 'Please enter a message and a valid email.'});
        return false;
    }
  };

  handleSubmit = async () => {
    const { email, message } = this.state;
    if (this.validateSubmit()) {
      this.setState({buttonDisabled: true});
      try {
        const response = await postMessage(email, message);
        this.clearState();
      } catch(error) {
          console.log(error);
          this.setState({error: 'There was a problem sending your message - Please try again.'});
      }
      this.setState({buttonDisabled: false});
    }
  };

  clearState = () => {
    this.setState({
      email: '',
      message: '',
      error: '',
      popUpEnabled: true
    });
  };

  closePopup = () => {
    this.setState({popUpEnabled: false});
  };

  render  = () => {
    let { email, message, error } = this.state;

    return (
      <div className="contact">
        {this.state.popUpEnabled ? <Popup closePopup={this.closePopup}/> : null}
        <div className="contact__background">
          <div className="blur-wrapper">
            <div className="contact__wrapper">
              <div className="contact__email-wrapper">
                <div className="contact__email-section">
                  <label htmlFor="email" className="contact__input-label">Email:</label>
                  <input className="contact__input" id="email" value={email} onChange={e => this.handleChange(e)} autoComplete="off"/>
                </div>
                <Link to="/" className="back-btn">Back</Link>
              </div>
              <div className="contact__message-wrapper">
                <label htmlFor="message" className="contact__input-label">Message:</label>
                <textarea className="contact__input" id="message" value={message} onChange={e => this.handleChange(e)}>
                </textarea>
              </div>
              <span className="contact__form-error">{error}</span>
              <div className="contact__title-wrapper">
                <h2 className="contact__title">Contact</h2>
                <button className="contact__button" onClick={() => this.handleSubmit()} disabled={this.state.buttonDisabled}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };

}

export default Contact;
