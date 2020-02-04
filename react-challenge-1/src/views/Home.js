import React from 'react';
import MovieList from '../components/MovieList';
import AddMovie from '../components/AddMovie';
import useRequest from '../hooks/useRequest';
import Loading from '../components/Loading';

export default function Home() {
  const {
    data: movies,
    loading,
    error,
    handlePost,
    handleDelete
  } = useRequest('movies');

  if (loading) return <Loading />
  if (error) return <p className="text-center mt-5">Error...</p>

  return (
    <>
      <header className="container-fluid">
        <div className="jumbotron jumbotron-fluid">
          <div className="container header-container mt-5">
            <div className="row justify-content-center">
              <h1 className="text-white mb-3">Welcome to IndoXXI 2.0</h1>
              <AddMovie
                save={ handlePost }
              />
              <div className="col-2"></div>
            </div>
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