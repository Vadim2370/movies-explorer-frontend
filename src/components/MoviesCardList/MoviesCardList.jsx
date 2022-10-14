import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({
  movies, savedMoviesList, onSave, onDelete, isSaved,
}) {
  return (
    <section className="movies">
      <ul className="movies__list">
        {
                    movies.map((moviesCard) => (
                      <MoviesCard
                        key={moviesCard.id || moviesCard.movieId}
                        moviesCard={moviesCard}
                        savedMoviesList={savedMoviesList}
                        onSave={onSave}
                        onDelete={onDelete}
                        isSaved={isSaved}
                      />
                    ))
                }
      </ul>
    </section>
  );
}

export default MoviesCardList;
