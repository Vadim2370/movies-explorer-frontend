import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './BurgerMenu.css';

function BurgerMenu({ onClick, isOpen, onClose }) {
  const burgerButton = `burger-menu__visible ${isOpen ? 'burger-menu__hidden' : 'burger-menu__visible'}`;
  const burgerActive = `burger-menu ${isOpen ? 'burger-menu__active' : ''}`;
  const styleActive = ({ isActive }) => `link burger-menu__link ${isActive ? 'burger-menu__link_active' : ''}`;

  return (
    <>
      <button
        type="button"
        aria-label="Кнопка"
        className={burgerButton}
        onClick={onClick}
      />
      <div className={burgerActive}>
        <button
          type="button"
          aria-label="Закрыть"
          className="burger-menu__close"
          onClick={onClose}
        />
        <nav className="burger-menu__links">
          <Link className="link burger-menu__link" to="/">Главная</Link>
          <NavLink className={styleActive} to="/movies">Фильмы</NavLink>
          <NavLink className={styleActive} to="/saved-movies">Сохранённые фильмы</NavLink>
        </nav>
        <nav className="burger-menu__footer">
          <Link className="link burger-menu__account" to="/profile">Аккаунт</Link>
        </nav>
      </div>

    </>
  );
}

export default BurgerMenu;
