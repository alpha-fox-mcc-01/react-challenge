import React, { useEffect, useState } from "react";
import PokemonsChart from "./PokemonChart";
import SearchBar from "./SearchBar";
import Spinner from "react-spinkit";
import Swal from "sweetalert2";

import useFetcher from "./hooks/useFetcher";
import Recommendations from "./Recommendations";
export default function App(props) {
  const [showDetail, setShowDetail] = useState(true);
  const {
    loadingPokemon,
    errorPokemon,
    pokemon,
    typePokemons,
    abilityPokemons,
    fetchPokemonDetail,
    fetchRecommendations
  } = useFetcher();

  useEffect(() => {
    if (errorPokemon) {
      Swal.fire(
        "Error",
        "Sorry, unable to find pokemon with that name",
        "error"
      );
    }
  }, [errorPokemon]);

  useEffect(() => {
    if (pokemon.id) {
      fetchRecommendations(pokemon);
      setShowDetail(true);
    }
  }, [fetchRecommendations, pokemon]);

  const getPokemon = name => {
    setShowDetail(false);
    fetchPokemonDetail(name);
  };

  if (loadingPokemon) return <Spinner name="double-bounce" />;
  return (
    <>
      <SearchBar getPokemon={getPokemon} />
      <hr />
      {showDetail && (
        <div id="detail">
          <center>
            {!pokemon.hasOwnProperty("id") && (
              <img
                id="no-pokemon"
                src={require("./noPokemon.png")}
                width="300"
                height="300"
                alt="no-pokemon"
              />
            )}
          </center>
          {pokemon.hasOwnProperty("id") && (
            <div className="row">
              <div className="col-md-6 pokemon-card">
                <PokemonsChart pokemon={pokemon} />
              </div>
              <div className="col-md-6 pokemon-card might-like">
                <h1>
                  <strong>Recommendations</strong>
                </h1>
                <br />
                <p>
                  <u>Explore more and broaden your knowledge!</u>
                </p>
                <hr />
                <h3>
                  You might like:{" "}
                  <strong>
                    <i>{pokemon.types[0].type.name}</i>
                  </strong>{" "}
                  type pokemons
                </h3>
                <br />
                <Recommendations pokemons={typePokemons} />
                <hr />
                <h3>
                  You might also like: Pokemons with{" "}
                  <strong>
                    <i>{pokemon.abilities[0].ability.name}</i>
                  </strong>{" "}
                  ability
                </h3>
                <br />
                <Recommendations pokemons={abilityPokemons} />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
