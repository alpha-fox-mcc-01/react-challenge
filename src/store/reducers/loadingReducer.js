import { TOGGLE_LOADING } from '../actions/'

const initialState = {
  isLoading: true,
}

function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LOADING:
      return { ...state, isLoading: action.payload }
    default:
      return state
  }
}

export default loadingReducer
