import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ movies, hideLike }) {
  return (
    <section className="movies">
      <ul className="movies__list">
        {
                    movies.map((data) => (
                      <MoviesCard
                        key={data.name}
                        {...data}
                        hideLike={hideLike}
                      />
                    ))
                }
      </ul>
    </section>
  );
}

export default MoviesCardList;
