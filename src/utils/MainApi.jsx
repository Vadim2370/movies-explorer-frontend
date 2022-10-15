import { BASE_URL } from './constans';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`Ошибка: ${res.status}`));
}

const token = localStorage.getItem('jwt');

export function getUser() {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

export function createUser({ name, email, password }) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  }).then(checkResponse);
}

export function login({ email, password }) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
}

export function logout() {
  return fetch(`${BASE_URL}/signout`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkResponse);
}

export function updateUserProfile(name, email) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, email }),
  }).then(checkResponse);
}

export function getMovies() {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

export function addMovie(data) {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then(checkResponse);
}

export function deleteMovie(_id) {
  return fetch(`${BASE_URL}/movies/${_id}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}
