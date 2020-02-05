import { RECEIVE_POKEMON, SET_ERROR_POKEMON, SET_LOADING_POKEMON, RECEIVE_RECOMMENDATION_POKEMONS, RECEIVE_COMPARE_POKEMON } from '../actions/'

const initialState = {
    pokemon: {},
    comparePokemon: {},
    abilityPokemons: [],
    typePokemons: [],
    loadingPokemon: false,
    errorPokemon: false
}

function pokemonReducer(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_POKEMON:
            return {...state, pokemon: action.data}
        case RECEIVE_RECOMMENDATION_POKEMONS:
            return {...state, abilityPokemons: action.recommendationPokemons.ability, typePokemons:action.recommendationPokemons.type}
        case RECEIVE_COMPARE_POKEMON: 
            return {...state, comparePokemon: action.data}
        case SET_LOADING_POKEMON:
            return {...state, loadingPokemon: action.isLoading}
        case SET_ERROR_POKEMON:
            return {...state, errorPokemon: action.isError}
        default: 
            return state
    }
}

export default pokemonReducer