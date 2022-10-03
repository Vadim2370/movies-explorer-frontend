import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useValidationForm from '../../hooks/useValidationForm';
import './Profile.css';

function Profile() {
  const {
    values, errors, setValues, handleChange, resetForm,
  } = useValidationForm();
  useEffect(() => {
    setValues({ name: 'Виталий', email: 'pochta@yandex.ru' });
    resetForm({}, {}, false);
  }, [resetForm]);
  return (
    <section className="profile">
      <h2 className="profile__title">
        Привет,
        &nbsp;
        {values.name}
        !
      </h2>
      <form className="profile__form">
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
              value={values.name ?? ''}
              onChange={handleChange}
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
              maxLength="40"
              value={values.email ?? ''}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <span className="error error__email">{errors.email}</span>
          </label>
        </div>
        <div className="profile__nav">
          <button className="profile__button profile__button_edit" type="submit">Редактировать</button>
          <Link className="profile__button profile__button_logout" to="/">Выйти из аккаунта</Link>
        </div>
      </form>
    </section>
  );
}

export default Profile;
