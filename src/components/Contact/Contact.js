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

  render  = () => {
    return (
      <div className="Contact">
        <div className="contact-back">
          <div className="blur-wrapper">
            <div className="contact-wrapper">
            </div>
          </div>
        </div>
      </div>
    )
  };

}

export default Contact;
