import React, { useState } from 'react'

import useFetchTop from '../hooks/useFetchTop'

import AnimeCard from '../components/AnimeCard'
import SearchBar from '../components/SearchBar'

export default function CardList(props) {
  const [activeKeyword, setActiveKeyword] = useState('')
  const [searchResult, setSearchResult] = useState([])

  // using custom hooks (useFetchTop) to add some abstraction when fetching data
  // not necessarily have to be like this, but nice to know that we can
  const initialFetch = useFetchTop(props.type)
  // ---------

  const searchAnime = (keyword) => {
    setActiveKeyword(keyword)
    const result = initialFetch.filter((anime) => {
      const title = anime.title.toLowerCase()
      return title.includes(keyword.toLowerCase())
    })
    setSearchResult(result)
  }

  let renderedData = []
  if (activeKeyword) {
    renderedData = searchResult
  } else {
    renderedData = initialFetch
  }

  return (
    <>
      <SearchBar searchAnime={searchAnime} />
      <div className='d-flex flex-wrap justify-content-around'>
        {renderedData.map((anime) => (
          <AnimeCard cardType={props.type} anime={anime} key={anime.mal_id} />
        ))}
      </div>
    </>
  )
}
