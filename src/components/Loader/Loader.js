import React from 'react';

import './Loader.scss';

export const Loader = () => {

  return (
    <div className="loader">
      <div class="loader__ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  )
};

export default Loader;
