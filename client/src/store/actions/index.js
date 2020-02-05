// Imports
import instance from '../../helpers/axiosinstance'


// Constants
export const SET_FILMS = 'SET_FILMS'
export const SET_ERROR = 'SET_ERROR'
export const SET_LOADING = 'SET_LOADING'
export const SET_DETAILS = 'SET_DETAILS'

export const setFilms = (films) => {
  return {
    type: SET_FILMS,
    films
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}

export const setError = (err) => {
  return {
    type: SET_ERROR,
    err
  }
}

export const setDetails = (details) => {
  return {
    type: SET_DETAILS,
    details
  }
}

export const fetchFilms = (endpoint) => {
  return dispatch => {
    dispatch(setLoading())
    instance.get(endpoint)
            .then(({ data }) => {
              if (endpoint === '/films') {
                dispatch(setFilms(data))
              }
              dispatch(setDetails(data))
            })
            .catch(err => {
              dispatch(setError(err.response.body))
            }) 
          
  }
}