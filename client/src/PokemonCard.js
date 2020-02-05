import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default function PokemonCard(props) {
    let history = useHistory()

    function viewDetail (name) {
        history.push('/' + name)
    }

    const { pokemon } = props
    let cardStyle = {
        width: '30rem',
        // marginLeft: 'auto',
        // marginRight: 'auto',
        height: '44rem'
    }
    return (
        <div id='pokemon-container'>
            <div className="card" id='pokemon-card' style={cardStyle}>
                <img className="card-img-top" src={ pokemon.sprites.front_default } alt="Pokemon_Image" />
                <div className="card-body">
                    <h1 className="card-title">{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }</h1><hr />
                    <h5>Type: { pokemon.types[0].type.name }</h5><hr />
                    {pokemon.stats.map((field, i) => <p className="card-text" key={i} >&bull;&nbsp;{field.stat.name}: {field.base_stat}</p>)}
                </div>
            </div>
            <div className='view-detail'>
                <div className='text' onClick={() => viewDetail(pokemon.name)}>
                    View Detail
                </div>
            </div>
        </div>
    )
}

