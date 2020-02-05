import React from 'react'
import axios from 'axios'

import './App.css'

import AnimeCard from './AnimeCard'
import SearchBar from './SearchBar'



class TopAnimeList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      animes: [],
      searchResult: [],
      activeKeyword: '',
    }
  }

  searchAnime = (keyword) => {
    this.setState({ activeKeyword: keyword }, function () {
      const result = this.state.animes.filter(anime => {
        const title = anime.title.toLowerCase()
        return title.includes(keyword)
      })
      this.setState({
        searchResult: result
      })
    })
  }

  render() {
    let renderArray = []
    if (this.state.activeKeyword !== '') {
      renderArray = this.state.searchResult
    } else {
      renderArray = this.state.animes
    }

    return (
      <div className="container mt-5">
        <h3 className="text-center">Top Anime List</h3>
        <SearchBar searchAnime={this.searchAnime} />
        {renderArray.map(anime => <AnimeCard anime={anime} key={anime.mal_id} />)}
      </div>
    )

  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: 'https://api.jikan.moe/v3/top/anime/1'
    })
      .then(({ data }) => {
        this.setState((state) => {
          return {
            animes: data.top
          }
        })
      })
      .catch(console.log)
  }
}

export default TopAnimeList;
