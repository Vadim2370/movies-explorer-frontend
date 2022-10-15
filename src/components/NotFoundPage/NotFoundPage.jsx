import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
  
  return (
    <section className="notFoundPage">
      <div className="notFoundPage__container">
        <h2 className="notFoundPage__title">404</h2>
        <p className="notFoundPage__subtitle">Страница не найдена</p>
        <NavLink className="link notFoundPage__link" to="/">Назад</NavLink>
      </div>
    </section>
  );
}

export default NotFoundPage;
