import axios from 'axios'
// action types
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON'
export const RECEIVE_COMPARE_POKEMON = 'RECEIVE_COMPARE_POKEMON'
export const RECEIVE_RECOMMENDATION_POKEMONS = 'RECEIVE_RECOMMENDATION_POKEMONS'
export const SET_LOADING_POKEMON = 'SET_LOADING_POKEMON'
export const SET_ERROR_POKEMON = 'SET_ERROR_POKEMON'

// action creators
export const getPokemonDetail = (keyword, pokemonType) => {
    return dispatch => {
        dispatch(setLoadingPokemon())
        axios({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/' + keyword.toLowerCase()
        })
            .then(({ data }) => {
                if (pokemonType === 'main') {
                    dispatch(receivePokemonDetail(data))
                } else {
                    dispatch(receiveComparePokemonDetail(data))
                }
            })
            .catch(({ response: { data }}) => {
                dispatch(setErrorPokemon(data))
            })
    }
}

export const getRecommendations = (pokemon) => {
    let ability = []
    let type = []
    return dispatch => {
        axios({
            method: 'GET',
            url: pokemon.types[0].type.url
        })
            .then(({ data }) => {
                type = data.pokemon
                return axios({
                    method: 'GET',
                    url: pokemon.abilities[0].ability.url
                })
            })
            .then(({ data }) => {
                ability = data.pokemon
                dispatch(receiveRecommendations({type, ability}))
            })
            .catch(({ response: { data }}) => {
                dispatch(setErrorPokemon(data))
            })
    }
}

export const receiveRecommendations = (recommendationPokemons) => {
    return {
        type: RECEIVE_RECOMMENDATION_POKEMONS,
        recommendationPokemons
    }
}

export const receivePokemonDetail = (data) => {
    return {
        type: RECEIVE_POKEMON,
        data
    }
}

export const receiveComparePokemonDetail = (data) => {
    return {
        type: RECEIVE_COMPARE_POKEMON,
        data
    }
}

export const setLoadingPokemon = () => {
    return {
        type: SET_LOADING_POKEMON,
    }
}

export const setErrorPokemon = (error) => {
    return {
        type: SET_ERROR_POKEMON,
        error
    }
}