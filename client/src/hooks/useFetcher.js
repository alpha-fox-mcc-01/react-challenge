import { useState } from 'react'
import { getPokemonDetail, getRecommendations } from '../store/actions/'
import { useSelector, useDispatch } from 'react-redux'

export default function useFetcher() {
    const dispatch = useDispatch();
    // const [typePokemons, setTypePokemons] = useState([])
    // const [abilityPokemons, setAbilityPokemons] = useState([])
    const typePokemons = useSelector((state) => state.typePokemons)
    const abilityPokemons = useSelector((state) => state.abilityPokemons)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    // const [pokemon, setPokemon] = useState({})
    const pokemonLoading = useSelector(state => state.pokemonLoading)
    const pokemonError = useSelector(state => state.pokemonError)
    const pokemon = useSelector(state => state.pokemon)
    const comparePokemon = useSelector(state => state.comparePokemon)

    const fetchRecommendations = (pokemon) => {
        dispatch(getRecommendations(pokemon))
    }

    const fetchPokemonDetail = (keyword) => {
        dispatch(getPokemonDetail(keyword, 'main'))
    }

    const fetchComparePokemonDetail = (keyword) => {
        dispatch(getPokemonDetail(keyword, ''))
    }

    return {
        pokemon,
        comparePokemon,
        typePokemons,
        abilityPokemons,
        fetchPokemonDetail,
        fetchComparePokemonDetail,
        fetchRecommendations,
        loading,
        error
    }
}