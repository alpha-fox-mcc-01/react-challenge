import axios from "../../api/axiosInstance";
import axiosImdb from "../../api/axiosImdb";

export const ADD_MOVIE = "ADD_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";
export const SET_ONE_MOVIE = "SET_ONE_MOVIE";
export const SET_MOVIES = "SET_MOVIES";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_ROUTE_FOUND = "SET_ROUTE_FOUND";
export const SET_TITLE = "SET_TITLE";

export const addMovie = movie => {
  return {
    type: ADD_MOVIE,
    payload: movie
  };
};

export const addMovieToServer = movie => {
  return dispatch => {
    axios
      .post("movies", movie)
      .then(({ data: newData }) => {
        dispatch(addMovie(newData));
      })
      .catch(({ response: { data } }) => {
        dispatch(setError(data));
      });
  };
};

export const requestAddMovie = title => {
  return dispatch => {
    requestFilmDetail(title)
      .then(({ data }) => {
        const { id, title, year, length, rating, poster, plot } = data;
        if (!year) {
          dispatch(setTitle(true));
        } else {
          dispatch(
            addMovieToServer({
              id,
              title,
              year,
              length,
              rating,
              poster,
              plot,
              createdAt: new Date()
            })
          );
        }
      })
      .catch(({ response: { data } }) => {
        dispatch(setError(data));
      });
  };
};

const requestFilmDetail = value => {
  return axiosImdb.get(`film/${value}`, {
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host":
        "imdb-internet-movie-database-unofficial.p.rapidapi.com",
      "x-rapidapi-key": "5b5732de93msh3cd2ea93eda46cap17bbc4jsn3de9c6dab431"
    }
  });
};

export const requestDetailMovie = id => {
  return dispatch => {
    requestFilmDetail(id)
      .then(({ data }) => {
        console.log(data);
        if (!data.year) {
          dispatch(setRouteFound(false));
          dispatch(setLoading(false));
        } else {
          dispatch(setMovie(data));
          dispatch(setRouteFound(true));
          dispatch(setLoading(false));
        }
      })
      .catch(({ response: { data } }) => {
        dispatch(setError(data));
      });
  };
};

export const setRouteFound = value => {
  return {
    type: SET_ROUTE_FOUND,
    payload: value
  };
};

export const setMovie = movie => {
  return {
    type: SET_ONE_MOVIE,
    payload: movie
  };
};

export const requestDeleteMovie = id => {
  return dispatch => {
    axios
      .delete(`movies/` + id)
      .then(function({ data: newData }) {
        dispatch(deleteMovie(id));
      })
      .catch(({ response: { data } }) => {
        dispatch(setError(data));
      });
  };
};

export const deleteMovie = id => {
  return {
    type: DELETE_MOVIE,
    payload: id
  };
};

export const requestMovies = () => {
  return dispatch => {
    axios
      .get(`movies?_sort=createdAt&_order=desc`)
      .then(({ data }) => {
        dispatch(setMovies(data));
        dispatch(setLoading(false));
      })
      .catch(({ response: { data } }) => {
        dispatch(setError(data));
      });
  };
};

export const setMovies = movies => {
  return {
    type: SET_MOVIES,
    payload: movies
  };
};

export const setLoading = value => {
  return {
    type: SET_LOADING,
    payload: value
  };
};

export const setError = err => {
  return {
    type: SET_ERROR,
    payload: err
  };
};

export const setTitle = title => {
  return {
    type: SET_TITLE,
    payload: title
  };
};
