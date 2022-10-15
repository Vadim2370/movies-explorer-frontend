import { MOVIES_URL } from './constans';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`Ошибка: ${res.status}`));
}

export function getMovies() {
  return fetch(`${MOVIES_URL}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(checkResponse);
}
