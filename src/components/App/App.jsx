/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import {
  Route, Routes, Navigate, useNavigate, useLocation,
} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Navigation from '../Navigation/Navigation';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as MainApi from '../../utils/MainApi';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isMessage, setIsMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    handleCheckToken();
    if (loggedIn) {
      handleGetUser();
      getSavedMovies();
    }
  }, [loggedIn]);

  function getSavedMovies() {
    const token = localStorage.getItem('jwt');
    if (token) {
      MainApi
        .getMovies()
        .then((data) => {
          setSavedMovies(data);
        })
        .catch((err) => { console.log(err); });
    }
  }

  function handleCheckToken() {
      MainApi
        .getUser()
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            navigate(location.pathname);
          }
        })
        .catch((err) => {
          console.log(`Ошибка токена: ${err}`);
          setLoggedIn(false);
          localStorage.clear();
        });
  }

  const handleLogin = (email, password) => {
    setIsLoading(true);
    MainApi
      .login(email, password)
      .then((res) => {
        if (res) {
          setIsMessage('Вы авторизовались');
          localStorage.setItem('jwt', res.token);
          setLoggedIn(true);
        }
      })
      .catch((err) => {
        setIsMessage('Ошибка авторизации');
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  const handleRegister = (userData) => {
    setIsLoading(true);
    MainApi
      .createUser(userData)
      .then(() => {
        handleLogin(userData);
        setIsMessage('Вы зарегистрировались');
      })
      .catch((err) => {
        setIsMessage('Ошибка регистрации');
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  const handleLogOut = () => {
    MainApi
      .logout()
      .then(() => {
        localStorage.removeItem('jwt');
        localStorage.clear();
        setLoggedIn(false);
        setCurrentUser({});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSaveMovie = (movie) => {
    const newMovie = {
      country: movie.country || 'unknown',
      director: movie.director || 'unknown',
      duration: movie.duration,
      year: movie.year || 'no data',
      description: movie.description || 'no data',
      image: movie.image,
      trailerLink: movie.trailerLink,
      thumbnail: movie.thumbnail,
      movieId: movie.id,
      nameRU: movie.nameRU || 'no name',
      nameEN: movie.nameEN || 'no name',
    };
    MainApi
      .addMovie(newMovie)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  const handleDeleteMovie = (movie) => {
    MainApi
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((movies) => movies.filter((item) => item._id !== movie._id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChangeProfile = (userData) => {
    MainApi
      .updateUserProfile(userData.name, userData.email)
      .then((res) => {
        setCurrentUser(res);
        setIsMessage('Данные пользователя обновлены');
      })
      .catch((err) => {
        setIsMessage('Ошибка обновления данных');
        console.log(err);
      });
  };

  function handleGetUser() {
    MainApi
      .getUser()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsMessage(''), 5000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Routes>
            <Route
              exact
              path="/"
              element={(
                <>
                  {loggedIn ? <Navigation /> : <Header />}
                  <Main />
                  <Footer />
                </>
            )}
            />
            <Route
              path="/movies"
              element={(
                <ProtectedRoute loggedIn={loggedIn}>
                  <>
                    <Navigation loggedIn={loggedIn} />
                    <Movies
                      loggedIn={loggedIn}
                      onSave={handleSaveMovie}
                      onDelete={handleDeleteMovie}
                      savedMoviesList={savedMovies}
                    />
                    <Footer />
                  </>
                </ProtectedRoute>
              )}
            />
            <Route
              path="/saved-movies"
              element={(
                <ProtectedRoute loggedIn={loggedIn}>
                  <>
                    <Navigation loggedIn={loggedIn} />
                    <SavedMovies
                      loggedIn={loggedIn}
                      onDelete={handleDeleteMovie}
                      savedMoviesList={savedMovies}
                    />
                    <Footer />
                  </>
                </ProtectedRoute>
          )}
            />
            <Route
              path="/profile"
              element={(
                <ProtectedRoute loggedIn={loggedIn}>
                  <>
                    <Navigation loggedIn={loggedIn} />
                    <Profile
                      loggedIn={loggedIn}
                      userChange={handleChangeProfile}
                      message={isMessage}
                      onSignOut={handleLogOut}
                    />
                  </>
                </ProtectedRoute>
            )}
            />
            <Route
              path="/signup"
              element={
                loggedIn ? (
                  <Navigate replace to="/movies" />
                ) : (
                  <Register
                    onRegister={handleRegister}
                    message={isMessage}
                    isLoading={isLoading}
                  />
                )
            }
            />
            <Route
              path="/signin"
              element={
                loggedIn ? (
                  <Navigate replace to="/movies" />
                ) : (
                  <Login
                    onLogin={handleLogin}
                    message={isMessage}
                    isLoading={isLoading}
                  />
                )
          }
            />
            <Route
              path="*"
              element={
                <NotFoundPage />
          }
            />
          </Routes>
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
