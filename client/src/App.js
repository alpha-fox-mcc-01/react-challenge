import React, { useState, useEffect } from 'react'
import PokemonsChart from './PokemonChart'
import axios from 'axios'
import SearchBar from './SearchBar'
import Swal from 'sweetalert2'
import Spinner from 'react-spinkit'

import Recommendations from './Recommendations'
import useFetcher from './hooks/useFetcher'

export default function App(props) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({})
    const [pokemon, setPokemon] = useState({})
    const [typePokemons, abilityPokemons] = useFetcher(pokemon)

    const getPokemon = (keyword) => {
        setLoading(true)
        axios({
            method: 'GET',  
            url: 'https://pokeapi.co/api/v2/pokemon/' + keyword.toLowerCase()
        })
            .then(({ data }) => {
                setLoading(false)
                setPokemon(data)
            })
            .catch(({ response: {data}}) => {
                setError(data)
            })
    }
    if (loading) return <Spinner name='double-bounce' />
    // if (error) return Swal.fire('Error', `Sorry, we are unable to find a pokemon with that name`, 'error'))

    return (
        <div className='container'>
            <center><h1>P O K E - X P L O R E</h1></center>
            <SearchBar getPokemon={ getPokemon }/><hr />
            <center>{!pokemon.hasOwnProperty('id') && <img id='no-pokemon' src={require('./noPokemon.png')} width='300' height='300' />}</center>
            <div className='row'>
                <div className='col-md-6'>
                    {pokemon.hasOwnProperty('id') && 
                    <PokemonsChart 
                    pokemon={ pokemon } 
                    />}
                </div>
                {pokemon.hasOwnProperty('id') && <div className='col-md-6'>
                    <h2>Recommendations</h2><br />
                    <p>Explore more and broaden your knowledge!</p><hr />
                    <h3>You might like: '{ pokemon.types[0].type.name}' type pokemons</h3><br />
                        <Recommendations pokemons={ typePokemons }/>
                    <hr />
                    <h3>You might also like: Pokemons with '{ pokemon.abilities[0].ability.name}' ability</h3><br />
                        <Recommendations pokemons={ abilityPokemons } />
                </div>}
            </div>
        </div>
    )
}