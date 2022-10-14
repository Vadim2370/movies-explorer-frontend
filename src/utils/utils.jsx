export const LAPTOP_W = 1200;
export const TABLET_W = 910;
export const MOBILE_W = 727;
export const LAPTOP_MAX_NUM = 16;
export const LAPTOP_NUM = 12;
export const TABLET_NUM = 8;
export const MOBILE_NUM = 6;
export const LAPTOP_MAX_ADD = 4;
export const LAPTOP_ADD = 3;
export const TAB_MOB_ADD = 2;

export function setShortMovies(movies) {
  return movies.filter((item) => item.duration < 40);
}

export function filterSearchMovies(movies, keyWord, checkBoxStatus) {
  const requestMovies = movies.filter((movie) => {
    const movieRU = String(movie.nameRU).toLocaleLowerCase().trim();
    const movieEN = String(movie.nameEN).toLocaleLowerCase().trim();
    const findMovie = keyWord.toLocaleLowerCase().trim();
    return movieRU.indexOf(findMovie) !== -1 || movieEN.indexOf(findMovie) !== -1;
  });
  if (checkBoxStatus) {
    return setShortMovies(requestMovies);
  }
  return requestMovies;
}

const OPTM_IMG = 'https://avatars.mds.yandex.net/i?id=afc0ebaeb22834bb3e9b9fb772a948eb-4880380-images-thumbs&n=13';
const MOV_URL = 'https://api.nomoreparties.co';

export function optmMovies(movies) {
  movies.forEach((mov) => {
    const movie = mov;
    if (!movie.image) {
      movie.image = OPTM_IMG;
      movie.thumbnail = OPTM_IMG;
      movie.trailerLink = OPTM_IMG;
    } else {
      movie.thumbnail = `${MOV_URL}${movie.image.formats.thumbnail.url}`;
      movie.image = `${MOV_URL}${movie.image.url}`;
    }
    if (!movie.trailerLink.includes('http')) {
      movie.trailerLink = 'https://www.youtube.com/';
    }
  });
  return movies;
}
