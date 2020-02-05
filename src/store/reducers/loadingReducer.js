import { TOGGLE_LOADING } from '../actions/'

const initialState = {
  isLoading: true,
}

function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LOADING:
      return { ...state, isLoading: !state.isLoading }
    default:
      return state
  }
}

export default loadingReducer
