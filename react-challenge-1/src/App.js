import React from 'react';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import useRequest from './hooks/useRequest';

export default function App() {
  // const [movies, setMovies] = useState([]);
  const {
    data: movies,
    loading,
    error,
    handlePost,
    handleDelete
  } = useRequest('movies');

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3000/movies?_sort=id&_order=desc')
  //     .then(({ data }) => {
  //       setMovies(data);
  //     })
  //     .catch(console.log);
  // }, []);

  // const deleteMovie = (id) => {
  //   axios
  //     .delete('http://localhost:3000/movies/' + id)
  //     .then(function({ data }) {
  //       const newMovies = movies.filter((movie) => movie.id !== id);
  //       setMovies(newMovies);
  //     })
  //     .catch(console.log);
  // };

  return (
    <>
      <header className="container-fluid">
        <div className="jumbotron jumbotron-fluid d-flex">
          <div className="container">
            <h1 className="text-white">Welcome to IndoXXI 2.0</h1>
            <AddMovie
              save={ handlePost }
            />
          </div>
        </div>
      </header>
      <main className="container">
        <div className="row">
          <MovieList
            movies={ movies }
            delete={ handleDelete }
          />
        </div>
      </main>
    </>
  );
};
