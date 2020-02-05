import { useState, useEffect } from 'react'
import Axios from 'axios'

export default function useFetchOne(id) {
  const [detail, setDetail] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    Axios({
      method: 'GET',
      url: `https://api.jikan.moe/v3/anime/${id}`
    })
      .then(({ data }) => {
        setDetail(data)
        setIsLoading(false)
      })
      .catch(console.log)
  }, [])

  return { detail, isLoading }
}