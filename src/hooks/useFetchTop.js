import { useState, useEffect } from 'react'
import Axios from 'axios'

export default function useFetchTop(type) {
  const [fetchedData, setFetchedData] = useState([])

  useEffect(() => {
    Axios({
      method: 'GET',
      url: `https://api.jikan.moe/v3/top/${type}/1`
    })
      .then(({ data }) => {
        setFetchedData(data.top)
      })
      .catch(console.log)
  }, [type])

  return fetchedData
}