import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__content">
        <div className="footer__copyright">&copy; 2022</div>
        <nav className="footer__navigation">
          <ul className="footer__links">
            <li>
              <a className="link footer__link" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
            </li>
            <li>
              <a className="link footer__link" href="https://github.com" target="_blank" rel="noreferrer">Github</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
