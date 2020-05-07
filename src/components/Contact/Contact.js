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
      popUpEnabled: false
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
      try {
        const response = await postMessage(email, message);
        this.clearState();
        return response;
      } catch(error) {
          console.log(error);
          this.setState({error: 'There was a problem sending your message - Please try again.'});
      }
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
    return (
      <div className="Contact">
        {this.state.popUpEnabled ? <Popup closePopup={this.closePopup}/> : null}
        <div className="contact-back">
          <div className="blur-wrapper">
            <div className="contact-wrapper">
              <div className="email-input-wrapper">
                <div className="email-section">
                  <label htmlFor="email" className="input-label">Email:</label>
                  <input className="contact-input" id="email" value={this.state.email} onChange={e => this.handleChange(e)} autoComplete="off"/>
                </div>
                <Link to="/" className="back-btn">Back</Link>
              </div>
              <div className="message-input-wrapper">
                <label htmlFor="message" className="input-label">Message:</label>
                <textarea className="contact-input" id="message" value={this.state.message} onChange={e => this.handleChange(e)}>
                </textarea>
              </div>
              <span className="form-error">{this.state.error}</span>
              <div className="title-input-wrapper">
                <h2 className="contact-header">Contact</h2>
                <button className="message-btn" onClick={() => this.handleSubmit()}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };

}

export default Contact;
