import React from 'react'
import SearchBar from './SearchBar'
import useFetcher from './hooks/useFetcher'
import { Line } from 'rc-progress'

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
            {pokemon.hasOwnProperty('id') && <div className="card" style={cardStyleCompare}>
                <div className="card-body pokemon-card">
                    <div className='row'>
                        <div className='col-md-3'>
                            <h1 className="card-title">{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }</h1><hr />
                            <h5>Type: { pokemon.types[0].type.name }</h5><hr />
                            <h5>Notable abilities: </h5>
                                    {pokemon.abilities.map(({ ability }) => <h5>&bull;&nbsp;{ability.name}</h5>)}
                            {/* {pokemon.stats.map((field, i) => <p className="card-text" key={i} >&bull;&nbsp;{field.stat.name}: {field.base_stat}</p>)} */}
                        </div>
                        <div className='col-md-6'>
                            {pokemon.stats.map((field, i) => <><strong><p className="card-text" key={i} >{field.stat.name}: {field.base_stat}</p></strong><Line percent={Number(field.base_stat) / 150 * 100} strokeWidth='1' strokeColor="rgba(0,250,154, 0.6)" /></>)}
                        </div>
                        <div className='col-md-3'>
                            <img className="card-img-top" src={ pokemon.sprites.front_default } width='90' height='150' alt="Front_Pokemon_Image" />
                            <img className="card-img-top" src={ pokemon.sprites.back_default } width='90' height='150' alt="Back_Pokemon_Image" />
                        </div>
                    </div>
                    <hr />
                    {/* <div className='moveset'>
                        <div className='row'>
                            <h5>Moveset:</h5>
                            |&nbsp;{ pokemon.moves.slice(0, 10).map(({ move }, i) => <p className='card-text' key={ i }><strong>{ move.name } |&nbsp;</strong></p>)}
                        </div>
                    </div> */}
                </div>
            </div>}
        </div>
    )
}
