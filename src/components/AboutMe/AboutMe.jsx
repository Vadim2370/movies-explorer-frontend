import React from 'react';
import './AboutMe.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import Portfolio from '../Portfolio/Portfolio';
import avatar from '../../images/avatar.jpg';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <SectionTitle title="Студент" />
      <div className="about-me__container">
        <div className="about-me__content">
          <h3 className="about-me__name">Виталий</h3>
          <div className="about-me__activity">Фронтенд-разработчик, 30 лет</div>
          <div className="about-me__description">Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить.&nbsp;С 2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.</div>
          <ul className="about-me__links">
            <li><a className="link about-me__link" href="https://github.com/Vadim2370" target="_blank" rel="noreferrer">Github</a></li>
            <li><a className="link about-me__link" href="https://t.me/stdem11" target="_blank" rel="noreferrer">Telegram</a></li>
          </ul>
        </div>
        <img className="about-me__avatar" src={avatar} alt="Фото студента" />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
