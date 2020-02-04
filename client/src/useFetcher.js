import instance from './helpers/axiosinstance'
import React, { useEffect, useState } from 'react'


function useFetcher(endpoint) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    instance.get(`${endpoint}`)
      .then(({ data }) => {
        setLoading(false)
        setData(data)
      })
      .catch(err => {
        setError(err.response.data)
      })
      
  }, [endpoint])

  return [loading, data, error]
}

export default useFetcher
