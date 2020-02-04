import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function useFetcher(pokemon) {
    const [typePokemons, setTypePokemons] = useState([])
    const [abilityPokemons, setAbilityPokemons] = useState([])
    
    useEffect(() => {
        if (pokemon.id) {
            axios({
                method: 'GET',
                url: pokemon.types[0].type.url
            })
                .then(({ data }) => {
                    setTypePokemons(data.pokemon)
                    return axios({
                        method: 'GET',
                        url: pokemon.abilities[0].ability.url
                    })
                })
                .then(({ data }) => {
                    setAbilityPokemons(data.pokemon)
                })
                .catch(console.log)
        }
    }, [pokemon])

    return [typePokemons, abilityPokemons]
}