import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import moviesData from '../../utils/cards';
import './Movies.css';

function Movies() {
  return (
    <section className="content">
      <SearchForm />
      <MoviesCardList
        movies={moviesData}
      />
      <button className="movies__more" type="button">Ещё</button>
    </section>
  );
}

export default Movies;
