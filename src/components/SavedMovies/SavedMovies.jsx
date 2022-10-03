import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import savedMoviesData from '../../utils/savecards';
import './SavedMovies.css';

function SavedMovies() {
  return (
    <section className="content">
      <SearchForm />
      <MoviesCardList
        movies={savedMoviesData}
        hideLike
      />
      <div className="space" />
    </section>
  );
}

export default SavedMovies;
