
import React, { useEffect } from 'react'
import { fetchFilms } from './store/actions'
import { useSelector, useDispatch } from 'react-redux'
function useFetcher(endpoint) {
  const data = useSelector(state => state.films)
  const loading = useSelector(state => state.loading)
  const error = useSelector(state => state.error)
  const details = useSelector(state => state.details)
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(fetchFilms(endpoint))
  }, [endpoint])


  return {
    loading, data, details, error
  }
}

export default useFetcher
