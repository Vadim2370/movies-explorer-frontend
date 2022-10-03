import React from 'react';
import './Portfolio.css';
import arrowD from '../../images/arrowD.svg';

function Portfolio() {
  return (
    <nav className="about-me__portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links">
        <li className="portfolio__link">
          <a className="link portfolio__link_link" href="https://vadim2370.github.io/how-to-learn/" target="_blank" rel="noreferrer">
            Статичный сайт
            <img className="portfolio__link_image" src={arrowD} alt="Ссылка" />
          </a>
        </li>
        <li className="portfolio__link">
          <a className="link portfolio__link_link" href="https://vadim2370.github.io/russian-travel/" target="_blank" rel="noreferrer">
            Адаптивный сайт
            <img className="portfolio__link_image" src={arrowD} alt="Ссылка" />
          </a>
        </li>
        <li className="portfolio__link">
          <a className="link portfolio__link_link" href="https://stdem11.nomoredomains.sbs/" target="_blank" rel="noreferrer">
            Одностраничное приложение
            <img className="portfolio__link_image" src={arrowD} alt="Ссылка" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Portfolio;
