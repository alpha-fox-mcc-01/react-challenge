import React, { Component } from 'react'
import PokemonsChart from './PokemonChart'
import axios from 'axios'
import SearchBar from './SearchBar'

export class App extends Component {
  state = {
    currentPokemon: {},
  }

  render() {
    return (
      <div className='container'>
        <SearchBar getPokemon={ this.getPokemon }/><hr />
        {this.state.currentPokemon.hasOwnProperty('id') && 
        <PokemonsChart 
          currentPokemon={ this.state.currentPokemon } 
        />}
      </div>
    )
  }

  getPokemon = (keyword) => {
    axios({
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokemon/" + keyword
    })
      .then(({ data }) => {
        this.setState({ currentPokemon: data })
      })
      .catch(console.log)
  }
}

export default App
