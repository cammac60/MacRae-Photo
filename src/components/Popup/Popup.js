import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Popup.scss';

export const Popup = () => {

  return (
    <div className="Popup">
      <div className="popup-inner">
        <img src={require('../../images/icons/cancel.svg')} className="exit-btn"/>
        <h5 className="popup-header">Thank you for your message!</h5>
        <span className="popup-desc">Please expect a reply to the provided email in 3-5 business days</span>
        <Link className="popup-back-link">Back to Home</Link>
      </div>
    </div>
  )

};

export default Popup;
