import React from 'react';
import { Link } from 'react-router-dom';

import './Popup.scss';

export const Popup = (props) => {
  const { closePopup } = props;

  return (
    <div className="popup">
      <div className="popup__inner">
        <img alt="Exit button" src={require('../../images/icons/cancel.svg')} className="popup__button" onClick={() => closePopup()}/>
        <h5 className="popup__header">Thank you for your message!</h5>
        <span className="popup__text">Please expect a reply to the provided email in 3-5 business days</span>
        <Link className="popup__link" to="/">Back to Home</Link>
      </div>
    </div>
  )

};

export default Popup;
