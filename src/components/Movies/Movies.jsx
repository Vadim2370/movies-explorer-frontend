import React, { useState, useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import * as MoviesApi from '../../utils/MoviesApi';
import './Movies.css';
import {
  optmMovies,
  setShortMovies,
  filterSearchMovies
} from '../../utils/utils';
import {
  LAPTOP_W,
  TABLET_W,
  MOBILE_W,
  LAPTOP_MAX_NUM,
  LAPTOP_NUM,
  TABLET_NUM,
  MOBILE_NUM,
  LAPTOP_MAX_ADD,
  LAPTOP_ADD,
  TAB_MOB_ADD,
} from '../../utils/constans';

function Movies({ savedMoviesList, onSave, onDelete }) {
  const [initialMovies, setInitialMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [renderMovies, setRenderMovies] = useState([]);
  const [isMore, setIsMore] = useState(false);
  const [number, setNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchComplit, setSearchComplit] = useState(false);
  const [searchMessage, setSearchMessage] = useState('');
  const [keyWord, setKeyWord] = useState('');
  const [checkBoxStatus, setCheckBoxStatus] = useState(false);
  const [add, setAdd] = useState(0);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const listenWidth = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', listenWidth);
    return () => {
      window.removeEventListener('resize', listenWidth);
    };
  }, [windowSize]);

  useEffect(() => {
    if (windowSize > LAPTOP_W) {
      setNumber(LAPTOP_MAX_NUM);
      setAdd(LAPTOP_MAX_ADD);
    } else if (windowSize > TABLET_W) {
      setNumber(LAPTOP_NUM);
      setAdd(LAPTOP_ADD);
    } else if (windowSize <= TABLET_W && windowSize >= MOBILE_W) {
      setNumber(TABLET_NUM);
      setAdd(TAB_MOB_ADD);
    } else if (windowSize < MOBILE_W) {
      setNumber(MOBILE_NUM);
      setAdd(TAB_MOB_ADD);
    }
  }, [windowSize]);

  const handleMoreLoad = () => {
    setRenderMovies((prev) => searchedMovies.slice(0, prev.length + add));
  };

  useEffect(() => {
    if (searchedMovies.length > 0) {
      if (searchedMovies.length > number) {
        setRenderMovies(searchedMovies.slice(0, number));
        setIsMore(true);
      } else {
        setRenderMovies(searchedMovies);
      }
    } else if (searchedMovies.length === 0) {
      setSearchComplit(true);
      setRenderMovies([]);
    }
  }, [number, searchedMovies]);

  const handleFilterSearchMovies = (movies, keyWord, checkBoxStatus) => {
    const movieList = filterSearchMovies(movies, keyWord, checkBoxStatus);
    setSearchedMovies(movieList);
    localStorage.setItem('movies', JSON.stringify(movieList));
    setSearchComplit(true);
  };

  const handleSearcheMovies = (keyWord, checkBoxStatus) => {
    setRenderMovies([]);
    setKeyWord(keyWord);
    setCheckBoxStatus(checkBoxStatus);
    localStorage.setItem('keyWord', keyWord);
    localStorage.setItem('checkBoxStatus', checkBoxStatus);

    if (!initialMovies.length) {
      setIsLoading(true);
      MoviesApi
        .getMovies()
        .then((data) => {
          optmMovies(data);
          setInitialMovies(data);
          handleFilterSearchMovies(data, keyWord, checkBoxStatus);
        })
        .catch(() => {
          setIsError(true);
          setSearchMessage('Во время запроса произошла ошибка, попробуйте ещё раз.');
          localStorage.removeItem('movies');
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      handleFilterSearchMovies(initialMovies, keyWord, checkBoxStatus);
      setIsLoading(false);
      setIsError(false);
    }
  };

  useEffect(() => {
    const arrMovies = JSON.parse(localStorage.getItem('movies'));
    setRenderMovies(arrMovies);
    if (arrMovies && !keyWord) {
      setCheckBoxStatus(checkBoxStatus);
      setSearchedMovies(checkBoxStatus ? setShortMovies(arrMovies) : arrMovies);
    }
  }, [checkBoxStatus, keyWord]);

  useEffect(() => {
    if (keyWord) {
      const arrMovies = filterSearchMovies(
        initialMovies,
        keyWord,
        checkBoxStatus,
      );
      setSearchedMovies(arrMovies);
    }
  }, [keyWord, checkBoxStatus, initialMovies]);

  useEffect(() => {
    if (renderMovies) {
      if (renderMovies.length === searchedMovies.length) {
        setIsMore(false);
      } else {
        setIsMore(true);
      }
    }
  }, [searchedMovies, renderMovies]);

  return (
    <section className="content">
      <SearchForm
        toSearchMovies={handleSearcheMovies}
      />
      {isLoading ? (
        <Preloader />
      ) : searchComplit ? (
        renderMovies && searchedMovies.length > 0 ? (
          <MoviesCardList
            movies={renderMovies}
            savedMoviesList={savedMoviesList}
            onSave={onSave}
            onDelete={onDelete}
          />
        ) : searchedMovies.length === 0 && initialMovies.length > 0 ? (
          <span className="movies__search_error">Ничего не найдено.</span>
        ) : ('')) : (isError && (<span className="movies__search_error">{searchMessage}</span>))}
      <div className="movies__more">
        {isMore && <button className="movies__more_btn" type="button" onClick={handleMoreLoad}>Ещё</button>}
      </div>
    </section>
  );
}

export default Movies;
