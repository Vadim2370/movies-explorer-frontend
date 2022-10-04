import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/headerLogo.svg';
import './Logo.css';

function Logo() {
  return (
    <Link to="/">
      <img className="link header__logo" src={headerLogo} alt="Логотип сайта" />
    </Link>
  );
}

export default Logo;
