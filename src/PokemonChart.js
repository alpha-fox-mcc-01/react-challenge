import React, { Component } from 'react'
import PokemonCard from './PokemonCard'

export class PokemonChart extends Component {
    render() {
        return (
            <PokemonCard pokemon={ this.props.currentPokemon }/>
        )
    }
}

export default PokemonChart
