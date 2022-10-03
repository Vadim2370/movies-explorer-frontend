import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../Logo/Logo';

function Header() {
  return (
    <header className="header">
      <Logo />
      <nav className="header__menu">
        <Link className="link link__header-register" to="/signup">Регистрация</Link>
        <Link className="link link__header-login" to="./signin">Войти</Link>
      </nav>
    </header>
  );
}

export default Header;
