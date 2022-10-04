import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form">
          <input className="search__input" type="text" name="search" placeholder="Фильм" required />
          <button className="search__button" type="submit" aria-label="Найти">Найти</button>
        </form>
        <Checkbox />
      </div>
    </section>
  );
}

export default SearchForm;
