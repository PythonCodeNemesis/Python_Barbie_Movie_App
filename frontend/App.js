// frontend/src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    axios
      .get("/api/movies")
      .then((response) => setMovies(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleRandomMovie = () => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    setRandomMovie(movies[randomIndex]);
  };

  return (
    <div className="app-container">
      <h1 className="title">Barbie Movie Chooser</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-details">Release Year: {movie.year}</p>
            <p className="movie-details">Director: {movie.director}</p>
            <p className="movie-details">Cast: {movie.cast.join(", ")}</p>
            <p className="movie-synopsis">{movie.synopsis}</p>
            <hr />
          </div>
        ))}
      </div>
      <button onClick={handleRandomMovie} className="random-button">
        Get Random Barbie Movie
      </button>
      {randomMovie && (
        <div className="random-movie">
          <h2 className="random-title">Randomly Selected Movie:</h2>
          <h3>{randomMovie.title}</h3>
          <p>Release Year: {randomMovie.year}</p>
          <p>Director: {randomMovie.director}</p>
          <p>Cast: {randomMovie.cast.join(", ")}</p>
          <p>{randomMovie.synopsis}</p>
        </div>
      )}
    </div>
  );
};

export default App;
