/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { filterSearchMovies } from '../../utils/utils';
import './SavedMovies.css';

function SavedMovies({ savedMoviesList, onDelete }) {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchComplit, setSearchComplit] = useState(false);
  const [keyWord, setKeyWord] = useState('');
  const [checkBoxStatus, setCheckBoxStatus] = useState(false);

  const handleSearcheMovies = (keyWord, checkBoxStatus) => {
    setKeyWord(keyWord);
    setCheckBoxStatus(checkBoxStatus);
    setSearchedMovies(filterSearchMovies(savedMoviesList, keyWord, checkBoxStatus));
    setSearchComplit(true);
  };

  useEffect(() => {
    if (searchedMovies.length > 0) {
      setSearchedMovies(filterSearchMovies(savedMoviesList, keyWord, checkBoxStatus));
    } else {
      setSearchedMovies(savedMoviesList);
    }
  }, [savedMoviesList]);

  return (
    <section className="content">
      <SearchForm
        toSearchMovies={handleSearcheMovies}
        savedMoviesState={true}
      />
      {searchComplit ? (
        searchedMovies.length > 0 ? (
          <MoviesCardList
            savedMoviesState={true}
            movies={searchedMovies}
            onDelete={onDelete}
            isSaved={true}
          />
        ) : (<span className="movies__search_error">Ничего не найдено.</span>)
      ) : (
        <MoviesCardList
          movies={savedMoviesList}
          onDelete={onDelete}
          isSaved={true}
        />
      )}
      <div className="space" />
    </section>
  );
}

export default SavedMovies;
