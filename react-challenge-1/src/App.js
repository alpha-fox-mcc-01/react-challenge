import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/movies?_sort=id&_order=desc')
      .then(({ data }) => {
        setMovies(data);
      })
      .catch(console.log);
  }, []);

  const postMovie = (movie) => {
    axios
    .post('http://localhost:3000/movies', {
      title: movie.title,
      year: movie.year,
      length: movie.length,
      rating: movie.rating,
      poster: movie.poster,
      plot: movie.plot,
    })
      .then(({ data }) => {
        setMovies([data, ...movies]);
      })
      .catch(console.log);
  }

  const deleteMovie = (id) => {
    axios
      .delete('http://localhost:3000/movies/' + id)
      .then(function({ data }) {
        const newMovies = movies.filter((movie) => movie.id !== id);
        setMovies(newMovies);
      });
  };

  return (
    <>
      <header className="container-fluid">
        <div className="jumbotron jumbotron-fluid d-flex">
          <div className="container">
            <h1 className="text-white">Welcome to IndoXXI 2.0</h1>
            <AddMovie
              postMovie={ postMovie }
            />
          </div>
        </div>
      </header>
      <main className="container">
        <div className="row">
          <MovieList
            movies={ movies }
            deleteMovie={ deleteMovie }
          />
        </div>
      </main>
    </>
  );
};
