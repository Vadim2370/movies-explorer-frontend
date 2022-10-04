import React from 'react';
import './NavTab.css';

function NavTab() {
  return (
    <ul className="nav__items">
      <li className="nav__item">
        <a className="link nav__link" href="#about-project">О проекте</a>
      </li>
      <li className="nav__item">
        <a className="link nav__link" href="#techs">Технологии</a>
      </li>
      <li className="nav__item">
        <a className="link nav__link" href="#about-me">Студент</a>
      </li>
    </ul>
  );
}

export default NavTab;
