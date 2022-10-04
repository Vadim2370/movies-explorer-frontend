import React from 'react';
import { Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <div className="App">
      <div className="page">
        <Routes>
          <Route
            exact
            path="/"
            element={(
              <>
                <Header />
                <Main />
                <Footer />
              </>
            )}
          />
          <Route
            path="/signup"
            element={
              <Register />
            }
          />
          <Route
            path="/signin"
            element={
              <Login />
          }
          />
          <Route
            path="/movies"
            element={(
              <>
                <Navigation />
                <Movies />
                <Footer />
              </>
          )}
          />
          <Route
            path="/saved-movies"
            element={(
              <>
                <Navigation />
                <SavedMovies />
                <Footer />
              </>
          )}
          />
          <Route
            path="/profile"
            element={(
              <>
                <Navigation />
                <Profile />
              </>
            )}
          />
          <Route
            path="*"
            element={
              <NotFoundPage />
          }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
