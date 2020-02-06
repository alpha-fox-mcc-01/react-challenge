import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList(props) {
  return props.movies.map(movie => {
    return <MovieCard key={movie.id} movie={movie} />;
  });
}
