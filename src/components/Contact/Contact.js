import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      </div>
    )
  };

}

export default Contact;
