import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Logo from '../Logo/Logo';
import useValidationForm from '../../hooks/useValidationForm';

function Login({ onLogin, message }) {
  const {
    values, errors, handleChange, resetForm, isValid, setIsValid,
  } = useValidationForm();
  const [isMessage, setIsMessage] = useState(false);
  useEffect(() => {
    setIsValid(false);
    resetForm();
  }, [resetForm, setIsValid]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(values);
    setIsMessage(true);
  }

  return (
    <section className="login">
      <div className="login__container">
        <div className="login__header">
          <Logo />
        </div>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form" name="login-form" onSubmit={handleSubmit}>
          <div className="login__field">
            <label htmlFor="email">
              <span className="login__label">E-mail</span>
              <input
                className="login__input"
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
              <span className="login__label">Пароль</span>
              <input
                className="login__input"
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
              <span className={isMessage ? 'error__login' : ''}>{message}</span>
            </label>
          </div>
          <div className="login__nav">
            <button className={`login__button ${!isValid && 'login__button_disabled'}`} type="submit" disabled={!isValid}>Войти</button>
            <Link className="link login__link" to="/signup">
              Ещё не зарегистрированы?
              <span className="login__register">Регистрация</span>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
