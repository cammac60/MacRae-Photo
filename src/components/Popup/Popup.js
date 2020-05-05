import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Popup.scss';

export const Popup = (props) => {
  const { closePopup } = props;

  return (
    <div className="Popup">
      <div className="popup-inner">
        <img src={require('../../images/icons/cancel.svg')} className="exit-btn" onClick={() => closePopup()}/>
        <h5 className="popup-header">Thank you for your message!</h5>
        <span className="popup-desc">Please expect a reply to the provided email in 3-5 business days</span>
        <Link className="popup-back-link" to="/">Back to Home</Link>
      </div>
    </div>
  )

};

export default Popup;
