import { useState } from 'react'
import axios from 'axios'
export default function useFetcher() {
    const [typePokemons, setTypePokemons] = useState([])
    const [abilityPokemons, setAbilityPokemons] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [pokemon, setPokemon] = useState({})

    const fetchRecommendations = (pokemon) => {
        // fetch recommendations here
        setLoading(true)
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
                setLoading(false)
                setAbilityPokemons(data.pokemon)
            })
            .catch(({ response: {data}}) => {
                setLoading(false)
                setError(data)
            })
    }

    const fetchPokemonDetail = (keyword) => {
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
                setLoading(false)
                setError(data)
            })
    }

    return {
        pokemon,
        typePokemons,
        abilityPokemons,
        fetchPokemonDetail,
        fetchRecommendations,
        loading,
        error
    }
}