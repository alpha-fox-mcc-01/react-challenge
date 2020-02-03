import React, { useState, useEffect } from 'react'
import PokemonsChart from './PokemonChart'
import axios from 'axios'
import SearchBar from './SearchBar'
import Swal from 'sweetalert2'

import Recommendations from './Recommendations'
export default function App(props) {
    const [pokemon, setPokemon] = useState({})
    const [typePokemons, setTypePokemons] = useState([])
    const [abilityPokemons, setAbilityPokemons] = useState([])

    useEffect(() => {
        if (pokemon.id) {
            axios({
                method: 'GET',
                url: pokemon.types[0].type.url
            })
                .then(({ data }) => {
                    setTypePokemons(data.pokemon)
                    return axios({
                        method: 'GET',
                        url: pokemon.abilities[0].ability.url
                    })
                })
                .then(({ data }) => {
                    setAbilityPokemons(data.pokemon)
                })
                .catch(console.log)
        }
    }, [pokemon])

    const getPokemon = (keyword) => {
        axios({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/' + keyword.toLowerCase()
        })
            .then(({ data }) => {
                setPokemon(data)
            })
            .catch(err => {
                Swal.fire('Error', `Sorry, we are unable to find a pokemon with that name`, 'error')
            })
    }

    return (
        <div className='container'>
            <center><h1>P O K E - X P L O R E</h1></center>
            <SearchBar getPokemon={ getPokemon }/><hr />
            <div className='row'>
                <div className='col-md-8'>
                    {pokemon.hasOwnProperty('id') && 
                    <PokemonsChart 
                    pokemon={ pokemon } 
                    />}
                </div>
                {/* {!pokemon.hasOwnProperty('id') && <img src='../public.noPokemon.png' width='300' height='300' />} */}
                {pokemon.hasOwnProperty('id') && <div className='col-md-4'>
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