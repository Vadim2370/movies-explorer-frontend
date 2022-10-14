import React from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import LikeBtn from '../LikeBtn/LikeBtn';
import './MoviesCard.css';

function MoviesCard({
  moviesCard, savedMoviesList, onSave, onDelete,
}) {
  const location = useLocation();
  const isSaved = moviesCard.id && savedMoviesList.some((m) => m.movieId === moviesCard.id);
  function getTime(min) {
    const hours = Math.trunc(min / 60);
    const minutes = min % 60;
    return `${hours}ч${minutes}м`;
  }
  const handleClickMovie = () => {
    if (isSaved) {
      onDelete(
        savedMoviesList.filter((m) => m.movieId === moviesCard.id)[0],
      );
    } else {
      onSave(moviesCard);
    }
  };
  const handleDeleteClick = () => {
    onDelete(moviesCard);
  };

  return (
    <li className="movie">
      <a className="link movie__link" href={moviesCard.trailerLink} target="_blank" rel="noreferrer">
        <img className="movie__image" src={moviesCard.image} alt={`${moviesCard.nameRU}`} title={[moviesCard.description, moviesCard.country, moviesCard.year]} />
      </a>
      <div className="movie__container">
        <div className="movie__content">
          <h2 className="movie__title">{moviesCard.nameRU}</h2>
          <p className="movie__duration">{getTime(moviesCard.duration)}</p>
        </div>
        {matchPath({ path: '/movies' }, location.pathname) && (
          <LikeBtn isSavedMovie={isSaved} onClick={handleClickMovie} />
        )}
        {matchPath({ path: '/saved-movies' }, location.pathname) && (
        <button type="button" className="movie__delete" onClick={handleDeleteClick} aria-label="Лайк" />
        )}
      </div>
    </li>
  );
}

export default MoviesCard;
