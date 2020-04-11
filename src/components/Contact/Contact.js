import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Contact.scss';

import { sendMessage } from '../../apiCalls';

export class Contact extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      message: ''
    }
  }

  handleChange = ({ target }) => {
    const { id } = target;
    const { value } = target;
    this.setState({[id]: value})
  };

  render  = () => {
    return (
      <div className="Contact">
        <div className="contact-back">
          <div className="blur-wrapper">
            <div className="contact-wrapper">
              <div className="email-input-wrapper">
                <div className="email-section">
                  <label for="email" className="input-label">Email:</label>
                  <input className="contact-input" id="email" value={this.state.email} onChange={e => this.handleChange(e)}/>
                </div>
                <Link to="/" className="back-btn">Back</Link>
              </div>
              <div className="message-input-wrapper">
                <label for="message" className="input-label">Message:</label>
                <textarea className="contact-input" id="message" value={this.state.message} onChange={e => this.handleChange(e)}>
                </textarea>
              </div>
              <div className="title-input-wrapper">
              test
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };

}

export default Contact;
