import { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { requestData } from '../store/actions'

export default function useFetchTop(type) {
  const dispatch = useDispatch()
  // const [fetchedData, setFetchedData] = useState([])

  const fetchedData = useSelector((state) => state.fetchedData)

  useEffect(() => {
    // console.log('fetchTopHook jalan, good job')
    dispatch(requestData(type))
  }, [type])

  return fetchedData
}
