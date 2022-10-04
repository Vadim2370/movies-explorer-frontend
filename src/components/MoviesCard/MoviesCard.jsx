import React, { useState } from 'react';
import './MoviesCard.css';

function MoviesCard({ hideLike, ...card }) {
  const [isLiked, setIsLiked] = useState(false);
  function handleCardLiked() {
    setIsLiked(!isLiked);
  }
  const cardLikedButtonClassName = `movie__like ${isLiked ? 'movie__like_active' : ''}`;
  let button;
  if (hideLike) {
    button = <button type="button" className="movie__delete" aria-label="Лайк" />;
  } else {
    button = <button type="button" onClick={handleCardLiked} className={cardLikedButtonClassName} aria-label="Лайк" />;
  }
  return (
    <li className="movie">
      <img className="movie__image" src={card.link} alt="Фильм" />
      <div className="movie__container">
        <div className="movie__content">
          <h2 className="movie__title">{card.name}</h2>
          <p className="movie__duration">{card.duration}</p>
        </div>
        {button}
      </div>
    </li>
  );
}

export default MoviesCard;
