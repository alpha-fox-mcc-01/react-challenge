import React, { useEffect, useState } from 'react'
import PokemonsChart from './PokemonChart'
import SearchBar from './SearchBar'
import Spinner from 'react-spinkit'
import Swal from 'sweetalert2'

import useFetcher from './hooks/useFetcher'
import Recommendations from './Recommendations'
export default function App(props) {
    const [showDetail, setShowDetail] = useState(true)
    const { loading, error, pokemon, typePokemons, abilityPokemons, fetchPokemonDetail, fetchRecommendations } = useFetcher();

    useEffect(() => {
        if (error) {
            Swal.fire('Error', 'Sorry, unable to find pokemon with that name', 'error')
        }
    }, [error])

    useEffect(() => {
        if (pokemon.id) {
            fetchRecommendations(pokemon);
            setShowDetail(true)
        }
    }, [pokemon])

    const getPokemon = (name) => {
        setShowDetail(false)
        fetchPokemonDetail(name)
    }

    if (loading) return <Spinner name='double-bounce'/> 
    return (
        <>
            <SearchBar getPokemon={ getPokemon }/><hr />
            { showDetail && <div id='detail'>
                <center>{!pokemon.hasOwnProperty('id') && <img id='no-pokemon' src={require('./noPokemon.png')} width='300' height='300' alt='no-pokemon' />}</center>
                {pokemon.hasOwnProperty('id') && <div className='row'>
                    <div className='col-md-6 pokemon-card'>
                        <PokemonsChart 
                        pokemon={ pokemon } 
                        />
                    </div>
                    <div className='col-md-6 pokemon-card might-like'>
                        <h2>Recommendations</h2><br />
                        <p>Explore more and broaden your knowledge!</p><hr />
                        <h3>You might like: '{ pokemon.types[0].type.name}' type pokemons</h3><br />
                            <Recommendations 
                            pokemons={ typePokemons }
                            />
                        <hr />
                        <h3>You might also like: Pokemons with '{ pokemon.abilities[0].ability.name}' ability</h3><br />
                            <Recommendations 
                            pokemons={ abilityPokemons } 
                            />
                    </div>
                </div>}
            </div>}
        </>
    )
}