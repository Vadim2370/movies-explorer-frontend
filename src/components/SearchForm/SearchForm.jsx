import React, { useState, useEffect } from 'react';
import './SearchForm.css';

function SearchForm({ toSearchMovies, savedMoviesState }) {
  const [keyWord, setKeyWord] = useState('');
  const [checkBoxStatus, setCheckBoxStatus] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!savedMoviesState) {
      const request = localStorage.getItem('keyWord');
      if (request) {
        setKeyWord(request);
      }
    }
  }, [savedMoviesState]);

  useEffect(() => {
    if (!savedMoviesState) {
      const status = localStorage.getItem('checkBoxStatus');
      if (JSON.parse(status) === true) {
        setCheckBoxStatus(true);
      } else {
        setCheckBoxStatus(false);
      }
    }
  }, [savedMoviesState]);

  const handleSubmitSearch = (evt) => {
    evt.preventDefault();
    if (!keyWord) {
      setError(true);
    } else {
      setError(false);
      toSearchMovies(keyWord, checkBoxStatus);
    }
  };

  const handleSearchInput = (evt) => {
    setKeyWord(evt.target.value);
    setError(false);
  };

  const handleCheckBox = (evt) => {
    setCheckBoxStatus(evt.target.checked);
    toSearchMovies(keyWord, evt.target.checked);
  };

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" onSubmit={handleSubmitSearch} noValidate>
          <input className="search__input" type="text" name="search" placeholder={error ? 'Введите ключевое слово.' : 'Фильм'} onChange={handleSearchInput} autoComplete="off" value={keyWord || ''} required />
          <button className="search__button" type="submit" onChange={handleCheckBox} aria-label="Найти">Найти</button>
        </form>
        <div className="checkbox__container">
          <label htmlFor="checkbox" className="checkbox__switch">
            <input type="checkbox" id="checkbox" onChange={handleCheckBox} />
            <div className="checkbox__slider" />
          </label>
          <span className="checkbox__text">Короткометражки</span>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
