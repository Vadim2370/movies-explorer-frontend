import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
  return (
    <section className="notFoundPage">
      <div className="notFoundPage__container">
        <h2 className="notFoundPage__title">404</h2>
        <p className="notFoundPage__subtitle">Страница не найдена</p>
        <Link className="link notFoundPage__link" replace to={-1}>Назад</Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
