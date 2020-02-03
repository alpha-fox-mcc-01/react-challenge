import React, { useState, useEffect } from 'react'

export default function Recommendations(props) {
    const { pokemons } = props
    return (
        <div className='recommendations'>
            {pokemons.map(({ pokemon }) => <h4 key={ pokemon.url}>&bull;&nbsp;{pokemon.name}</h4>)}
        </div>
    )
}