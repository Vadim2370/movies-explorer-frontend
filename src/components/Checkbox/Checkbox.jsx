import React from 'react';
import './Checkbox.css';

function Checkbox() {
  return (
    <div className="checkbox__container">
      <label htmlFor="checkbox" className="checkbox__switch">
        <input type="checkbox" id="checkbox" />
        <div className="checkbox__slider" />
      </label>
      <span className="checkbox__text">Короткометражки</span>
    </div>
  );
}

export default Checkbox;
