import { combineReducers } from 'redux'

import anime from './animeReducer'
import loading from './loadingReducer'

export default combineReducers({
  anime,
  loading,
})
