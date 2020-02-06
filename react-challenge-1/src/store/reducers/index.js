import {
  ADD_MOVIE,
  DELETE_MOVIE,
  SET_ONE_MOVIE,
  SET_MOVIES,
  SET_LOADING,
  SET_ERROR,
  SET_ROUTE_FOUND,
  SET_TITLE
} from "../actions";

const initialState = {
  movies: [],
  movie: {},
  error: null,
  loading: false,
  routeFound: null,
  titleNotFound: false
};

const dataReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_MOVIE:
      return { ...state, movies: [payload, ...state.movies] };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== payload)
      };
    case SET_ONE_MOVIE:
      return { ...state, movie: payload };
    case SET_MOVIES:
      return { ...state, movies: payload };
    case SET_LOADING:
      return { ...state, loading: payload };
    case SET_ERROR:
      return { ...state, error: payload };
    case SET_ROUTE_FOUND:
      return { ...state, routeFound: payload };
    case SET_TITLE:
      return { ...state, titleNotFound: payload };
    default:
      return state;
  }
};

export default dataReducer;
