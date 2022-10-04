import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Logo from '../Logo/Logo';
import './Navigation.css';

function Navigation() {
  const styleActive = ({ isActive }) => `link navigation__link ${isActive ? 'navigation__link_active' : ''}`;
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const openBurgerMenu = () => {
    setIsBurgerMenuOpen(true);
  };
  const closeBurgerMenu = () => {
    setIsBurgerMenuOpen(false);
  };

  return (
    <section className="navigation">
      <div className="navigation__menu">
        <div className="navigation__burger">
          {isBurgerMenuOpen && <div className="navigation__bg" />}
          <Logo />
          <BurgerMenu
            isOpen={isBurgerMenuOpen}
            onClick={openBurgerMenu}
            onClose={closeBurgerMenu}
          />
        </div>
        <div className="navigation__links">
          <NavLink className={styleActive} to="/movies">Фильмы</NavLink>
          <NavLink className={styleActive} to="/saved-movies">Сохранённые фильмы</NavLink>
        </div>
        <Link className="link navigation__account_link" to="/profile">Аккаунт</Link>
      </div>
    </section>
  );
}

export default Navigation;
