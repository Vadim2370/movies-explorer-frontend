import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Logo from '../Logo/Logo';
import useValidationForm from '../../hooks/useValidationForm';

function Login() {
  const {
    values, errors, setValues, handleChange, resetForm,
  } = useValidationForm();
  useEffect(() => {
    setValues({ email: 'pochta@yandex.ru' });
    resetForm({}, {}, false);
  }, [resetForm, setValues]);
  return (
    <section className="login">
      <div className="login__container">
        <div className="login__header">
          <Logo />
        </div>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form" name="login-form" action="/movies">
          <div className="login__field">
            <label htmlFor="email">
              <span className="login__label">E-mail</span>
              <input
                className="login__input"
                type="email"
                name="email"
                placeholder="E-mail"
                maxLength="40"
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
            </label>
          </div>
          <div className="login__nav">
            <button className="login__button" type="submit">Войти</button>
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
