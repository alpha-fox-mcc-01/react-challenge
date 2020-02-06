import { FETCH_DATA, FETCH_DETAIL } from '../actions/'
const initialState = {
  fetchedData: [],
  fetchedDetail: {},
}

function animeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      // console.log('fetching data', action.data)
      return { ...state, fetchedData: action.payload }
    case FETCH_DETAIL:
      return { ...state, fetchedDetail: action.payload }

    default:
      return state
  }
}

export default animeReducer
