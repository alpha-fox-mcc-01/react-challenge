import React from 'react'
import SearchBar from './SearchBar'
import useFetcher from './hooks/useFetcher'

export default function PokemonCompare() {
    let cardStyleCompare = {
        width: '100%',
        height: '35vh',
    }

    const { pokemon, fetchPokemonDetail } = useFetcher();

    return (
        <div className="card" style={ cardStyleCompare }>
             <div className='container' id='compare-container'>
                <SearchBar getPokemon={ fetchPokemonDetail }/>
            </div>
            {pokemon.hasOwnProperty('id') && <div className="card-body">
                <div className='row'>
                    <div className='col-md-5'>
                        <h1 className="card-title">{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }</h1><hr />
                        {/* <h5>Type: { pokemon.types[0].type.name }</h5><hr /> */}
                        <div className='row'>
                            {pokemon.stats.map((field, i) => <div className="col-md-4" key={i} >&bull;&nbsp;{field.stat.name}: {field.base_stat}</div>)}
                        </div>
                    </div>
                    <div className='col-md-7'>
                        <img src={ pokemon.sprites.front_default } width='100' height='100' alt="Pokemon_Image" />
                        <img src={ pokemon.sprites.back_default } width='100' height='100' alt="Pokemon_Image" />
                    </div>
                </div>
            </div>}
        </div>
    )
}
