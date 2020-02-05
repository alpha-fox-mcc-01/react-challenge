import { SET_FILMS, SET_LOADING, SET_ERROR, SET_DETAILS } from '../actions'

const initialState = {
    films: [],
    loading: false,
    error: null,
    details : []
}

function filmReducer(state = initialState, action) {
  switch(action.type) {
    case SET_LOADING: return {...state, loading: !state.loading}
    case SET_FILMS : return {...state, loading: false, films: action.films}
    case SET_ERROR : return {...state, error: action.error}
    case SET_DETAILS : return {...state, loading: false, details: action.details}
    default : return state
  }
}


export default filmReducer