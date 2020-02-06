import { RECEIVE_POKEMON, SET_ERROR_POKEMON, SET_LOADING_POKEMON, RECEIVE_RECOMMENDATION_POKEMONS, RECEIVE_COMPARE_POKEMON } from '../actions/'

const initialState = {
    pokemon: {},
    comparePokemon: {},
    abilityPokemons: [],
    typePokemons: [],
    loadingPokemon: false,
    errorPokemon: null
}

function pokemonReducer(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_POKEMON:
            return {...state, loadingPokemon: false, pokemon: action.data}
        case RECEIVE_RECOMMENDATION_POKEMONS:
            return {...state, loadingPokemon: false, abilityPokemons: action.recommendationPokemons.ability, typePokemons:action.recommendationPokemons.type}
        case RECEIVE_COMPARE_POKEMON: 
            return {...state, loadingPokemon: false, comparePokemon: action.data}
        case SET_LOADING_POKEMON:
            return {...state, loadingPokemon: !state.loadingPokemon}
        case SET_ERROR_POKEMON:
            return {...state, loadingPokemon: false, errorPokemon: action.error}
        default: 
            return state
    }
}

export default pokemonReducer