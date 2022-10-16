import { OPTM_IMG, MOV_URL } from "./constans";
import { SHORT_DURATION } from "./constans";

export function setShortMovies(movies) {
  return movies.filter((item) => item.duration < SHORT_DURATION);
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

export function getTime(min) {
  const hours = Math.trunc(min / 60);
  const minutes = min % 60;
  return `${hours}ч${minutes}м`;
}
