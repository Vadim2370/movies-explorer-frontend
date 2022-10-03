import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import Logo from '../Logo/Logo';
import useValidationForm from '../../hooks/useValidationForm';

function Register() {
  const {
    values, errors, setValues, handleChange, resetForm,
  } = useValidationForm();
  useEffect(() => {
    setValues({ name: 'Виталий', email: 'pochta@yandex.ru', password: '111111111111111' });
    resetForm({}, {}, false);
  }, [resetForm]);
  return (
    <section className="register">
      <div className="register__container">
        <div className="register__header">
          <Logo />
        </div>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form" name="register-form" action="/signin">
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
            </label>
          </div>
          <div className="register__nav">
            <button className="register__button" type="submit">Зарегистрироваться</button>
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
