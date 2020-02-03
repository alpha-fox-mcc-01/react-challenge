import React, { Component } from 'react'

export class PokemonCard extends Component {
    render() {
        const { pokemon } = this.props
        let cardStyle = {
            width: '30rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            height: '50rem'
        }
        return (
            <div className="card" style={cardStyle}>
                <img className="card-img-top" src={ pokemon.sprites.front_default } alt="Pokemon_Image" />
                <div className="card-body">
                    <h1 className="card-title">{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }</h1>
                        {pokemon.stats.map((field, i) => <p className="card-text" key={i} >&bull;&nbsp;{field.stat.name}: {field.base_stat}</p>)}
                </div>
            </div>
        )
    }
}

export default PokemonCard
