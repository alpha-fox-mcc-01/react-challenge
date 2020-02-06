import React, { useEffect } from "react";
import MovieList from "../components/MovieList";
import AddMovie from "../components/AddMovie";
import Loading from "../components/Loading";
import { useSelector, useDispatch } from "react-redux";
import { requestMovies, setLoading } from "../store/actions";

export default function Home() {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(requestMovies());
  }, [dispatch]);

  // tambah useEffect untuk swal

  if (loading) return <Loading />;
  if (error) return <p className="text-center mt-5">Error...</p>;

  return (
    <>
      <header className="container-fluid">
        <div className="jumbotron jumbotron-fluid">
          <div className="container header-container mt-5">
            <div className="row justify-content-center">
              <h1 className="text-white mb-3">Welcome to IndoXXI 2.0</h1>
              <AddMovie />
              <div className="col-2"></div>
            </div>
          </div>
        </div>
      </header>
      <main className="container">
        <div className="row">
          <MovieList movies={movies} />
        </div>
      </main>
    </>
  );
}
