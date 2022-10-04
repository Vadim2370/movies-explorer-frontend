import React from 'react';
import './AboutProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <SectionTitle title="О проекте" />
      <ul className="about-project__content">
        <li className="about-project__step">
          <h3 className="step__title">Дипломный проект включал 5 этапов</h3>
          <p className="step__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="about-project__step">
          <h3 className="step__title">На выполнение диплома ушло 5 недель</h3>
          <p className="step__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className="about-project__progress">
        <div className="progress__step">
          <div className="progress__week progress__week_green">1 неделя</div>
          <div className="progress__about">Back-end</div>
        </div>
        <div className="progress__step">
          <div className="progress__week">4 недели</div>
          <div className="progress__about">Front-end</div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
