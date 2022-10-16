/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useValidationForm from '../../hooks/useValidationForm';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import './Profile.css';

function Profile({ onSignOut, userChange, message }) {
  const {
    values, setValues, errors, setErrors, handleChange, isValid, setIsValid,
  } = useValidationForm();
  const currentUser = React.useContext(CurrentUserContext);
  const [isMessage, setIsMessage] = useState(false);
  const location = useLocation();

  const handleChangeName = (evt) => {
    if (evt.target.value === currentUser.name || evt.target.value === currentUser.email) {
      setIsValid(false);
      setErrors({
        errors: errors.name,
        [evt.target.name]: 'Измените имя',
      });
    } else {
      handleChange(evt);
    }
  };

  const handleChangeEmail = (evt) => {
    if (evt.target.value === currentUser.name || evt.target.value === currentUser.email) {
      setIsValid(false);
      setErrors({
        errors: errors.name,
        [evt.target.name]: 'Измените email',
      });
    } else {
      handleChange(evt);
    }
  };

  useEffect(() => {
    setIsMessage(message);
  }, [message]);

  useEffect(() => {
    setIsMessage('');
  }, [location]);

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser, setValues]);

  function handleSubmitProfile(evt) {
    evt.preventDefault();
    userChange({
      name: values.name,
      email: values.email,
    });
  }

  useEffect(() => {
    setIsValid(false);
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [userChange]);

  return (
    <section className="profile">
      <h2 className="profile__title">
        Привет,
        &nbsp;
        {currentUser.name}
        !
      </h2>
      <form className="profile__form" onSubmit={handleSubmitProfile}>
        <div className="profile__fields">
          <label htmlFor="name" className="profile__field">
            <p className="profile__label">Имя</p>
            <input
              className="profile__input"
              type="text"
              name="name"
              placeholder="Имя"
              pattern="^[A-Za-zА-Яа-яЁё]+$"
              minLength="2"
              maxLength="30"
              value={values.name || ''}
              onChange={handleChangeName}
              autoComplete="off"
              required
            />
            <span className="error error__name">{errors.name}</span>
          </label>
          <label htmlFor="email" className="profile__field">
            <p className="profile__label">E-mail</p>
            <input
              className="profile__input"
              type="email"
              name="email"
              placeholder="E-mail"
              pattern="^\S+@\S+\.\S+$"
              maxLength="40"
              value={values.email || ''}
              onChange={handleChangeEmail}
              autoComplete="off"
              required
            />
            <span className="error error__email">{errors.email}</span>
          </label>
          <span className={isMessage ? 'error__profile' : ''}>{message}</span>
        </div>
        <div className="profile__nav">
          <button className={`profile__button profile__button_edit ${!isValid && 'profile__button_edit-disabled'}`} type="submit" disabled={!isValid}>Редактировать</button>
          <Link className="profile__button profile__button_logout" to="/" onClick={onSignOut}>Выйти из аккаунта</Link>
        </div>
      </form>
    </section>
  );
}

export default Profile;
