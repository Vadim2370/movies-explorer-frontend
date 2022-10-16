import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import Logo from '../Logo/Logo';
import useValidationForm from '../../hooks/useValidationForm';

function Register({ onRegister, message, isLoading }) {
  const {
    values, errors, handleChange, resetForm, isValid, setIsValid,
  } = useValidationForm();
  const [isMessage, setIsMessage] = useState(false);
  const buttonTitle="Зарегистрироваться";
  const buttonLoadingTitle="Регистрация...";
  useEffect(() => {
    setIsValid(false);
    resetForm();
  }, [resetForm, setIsValid]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(values);
    setIsMessage(true);
  }

  return (
    <section className="register">
      <div className="register__container">
        <div className="register__header">
          <Logo />
        </div>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form" name="register-form" onSubmit={handleSubmit}>
          <div className="register__field">
            <label htmlFor="name">
              <span className="register__label">Имя</span>
              <input
                className="register__input"
                type="text"
                name="name"
                placeholder="Имя"
                pattern="^[A-Za-zА-Яа-яЁё]+$"
                minLength="2"
                maxLength="30"
                value={values.name ?? ''}
                onChange={handleChange}
                autoComplete="off"
                required
              />
              <span className="error">{errors.name}</span>
            </label>
            <label htmlFor="email">
              <span className="register__label">E-mail</span>
              <input
                className="register__input"
                type="email"
                name="email"
                placeholder="E-mail"
                maxLength="40"
                pattern="^\S+@\S+\.\S+$"
                value={values.email ?? ''}
                onChange={handleChange}
                autoComplete="off"
                required
              />
              <span className="error">{errors.email}</span>
            </label>
            <label htmlFor="password">
              <span className="register__label">Пароль</span>
              <input
                className="register__input"
                type="password"
                name="password"
                placeholder="Пароль"
                minLength="8"
                value={values.password ?? ''}
                onChange={handleChange}
                autoComplete="off"
                required
              />
              <span className="error">{errors.password}</span>
              <span className={isMessage ? 'error__reg' : ''}>{message}</span>
            </label>
          </div>
          <div className="register__nav">
            <button className={`login__button ${(!isValid || isLoading) && 'login__button_disabled'}`} type="submit" disabled={!isValid || isLoading}>{isLoading ? buttonLoadingTitle : buttonTitle}</button>
            <Link className="link register__link" to="/signin">
              Уже зарегистрированы?
              <span className="register__login">Войти</span>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;
