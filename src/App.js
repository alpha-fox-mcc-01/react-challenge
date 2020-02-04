import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

import AnimeCard from './AnimeCard'
import SearchBar from './SearchBar'

export default function TopAnimeList() {
  const [animes, setAnimes] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [activeKeyword, setActiveKeyword] = useState('')

  // componentDidMount, jgn lupa tambahin empty array di parameter kedua
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://api.jikan.moe/v3/top/anime/1'
    })
      .then(({ data }) => {
        setAnimes(data.top)
      })
      .catch(console.log)
  }, [])

  const searchAnime = (keyword) => {
    setActiveKeyword(keyword)
    const result = animes.filter(anime => {
      const title = anime.title.toLowerCase()
      return title.includes(keyword.toLowerCase())
    })
    setSearchResult(result)
  }

  let animeList = []
  if (activeKeyword.length === 0) {
    animeList = animes
  } else {
    animeList = searchResult
  }

  return (
    <div className="container mt-5">
      <h3 className="text-center">Top Anime List</h3>
      <SearchBar searchAnime={searchAnime} />
      <div className="d-flex flex-wrap">
        {animeList.map(anime => <AnimeCard anime={anime} key={anime.mal_id} />)}
      </div>
    </div>
  )
}