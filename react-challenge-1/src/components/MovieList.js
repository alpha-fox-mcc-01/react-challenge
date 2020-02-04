import React from 'react';
import MovieCard from './MovieCard';

export default function MovieList(props) {
  return props.movies.map((movie) => {
    return (
      <MovieCard
        key={ movie.id }
        movie={ movie }
        delete={ props.delete }
      />
    );
  });
};

// export class MovieList extends Component {
//   render() {
//     return this.props.movies.map((movie) => (
//       <MovieCard
//         key={ movie.id }
//         movie={ movie }
//       />
//     ));
//   }
// }

// export default MovieList;
