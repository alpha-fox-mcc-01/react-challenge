import { getPokemonDetail, getRecommendations } from '../store/actions/'
import { useSelector, useDispatch } from 'react-redux'

export default function useFetcher() {
    const dispatch = useDispatch();
    const typePokemons = useSelector((state) => state.typePokemons)
    const abilityPokemons = useSelector((state) => state.abilityPokemons)
    const loadingPokemon = useSelector(state => state.loadingPokemon)
    const errorPokemon = useSelector(state => state.errorPokemon)
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
        loadingPokemon,
        errorPokemon
    }
}