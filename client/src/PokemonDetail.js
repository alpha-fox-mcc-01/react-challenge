import React, { useEffect } from "react";
import { Line } from "rc-progress";

import { useParams } from "react-router-dom";
import useFetcher from "./hooks/useFetcher";
import PokemonCompare from "./PokemonCompare";

export default function PokemonDetail(props) {
  let loseBackground =
    "https://www.elsetge.cat/imagepost/b/51/511378_red-gradient-wallpaper.jpg";
  let winBackground =
    "https://www.xmple.com/wallpaper/linear-green-white-gradient-1920x1080-c2-90ee90-fffaf0-a-30-f-14.svg";

  let { name } = useParams();
  const { pokemon, comparePokemon, fetchPokemonDetail } = useFetcher();

  let imgUrlMain =
    "https://www.xmple.com/wallpaper/cyan-gradient-white-linear-1920x1080-c2-fffafa-6cd9fc-a-255-f-14.svg";

  let imgUrlCompare =
    "https://www.xmple.com/wallpaper/cyan-gradient-white-linear-1920x1080-c2-fffafa-6cd9fc-a-255-f-14.svg";

  let mainPower = 0,
    comparePower = 0;

  if (pokemon.hasOwnProperty("id") && comparePokemon.hasOwnProperty("id")) {
    // get power of first pokemon (initially chosen)
    pokemon.stats.forEach(field => {
      mainPower += Number(field.base_stat);
    });

    // get power of second pokemon (to be compared)
    comparePokemon.stats.forEach(field => {
      comparePower += Number(field.base_stat);
    });
    console.log(mainPower, "=====================");
    console.log(comparePower);
  }

  if (mainPower > comparePower) {
    imgUrlMain = winBackground;
    imgUrlCompare = loseBackground;
  } else if (mainPower < comparePower) {
    imgUrlMain = loseBackground;
    imgUrlCompare = winBackground;
  }

  useEffect(() => {
    fetchPokemonDetail(name);
  }, [fetchPokemonDetail, name]);

  let cardStyleDetail = {
    width: "100%",
    height: "43vh",
    backgroundImage: "url(" + imgUrlMain + ")",
    backgroundPosition: "center"
  };

  return (
    pokemon.hasOwnProperty("id") && (
      <>
        <hr />
        <div className="card" style={cardStyleDetail}>
          <div className="card-body pokemon-detail">
            <div className="row">
              <div className="col-md-3 basic-info">
                <h1 className="card-title">
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </h1>
                <hr />
                <h5>Type: {pokemon.types[0].type.name}</h5>
                <hr />
                <h5>Notable abilities: </h5>
                {pokemon.abilities.map(({ ability }) => (
                  <h5 key={Math.random()}>&bull;&nbsp;{ability.name}</h5>
                ))}
                {/* {pokemon.stats.map((field, i) => <p className="card-text" key={i} >&bull;&nbsp;{field.stat.name}: {field.base_stat}</p>)} */}
              </div>
              <div className="col-md-6">
                {pokemon.stats.map(field => (
                  <>
                    <strong>
                      <p className="card-text" key={Math.random()}>
                        {field.stat.name}: {field.base_stat}
                      </p>
                    </strong>
                    <Line
                      percent={(Number(field.base_stat) / 150) * 100}
                      strokeWidth="1"
                      strokeColor="rgba(0,250,154, 0.6)"
                    />
                  </>
                ))}
              </div>
              <div className="col-md-3">
                <img
                  className="card-img-top"
                  src={pokemon.sprites.front_default}
                  width="90"
                  height="150"
                  alt="Front_Pokemon_Image"
                />
                <img
                  className="card-img-top"
                  src={pokemon.sprites.back_default}
                  width="90"
                  height="150"
                  alt="Back_Pokemon_Image"
                />
              </div>
            </div>
            <hr />
            <div className="moveset">
              <div className="row">
                <h5>Moveset:</h5>
                |&nbsp;
                {pokemon.moves.slice(0, 10).map(({ move }) => (
                  <p className="card-text" key={Math.random()}>
                    <strong>{move.name} |&nbsp;</strong>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <br />
        <center>
          <h6>compare...</h6>
        </center>
        <hr />
        <PokemonCompare power={comparePower} imgUrl={imgUrlCompare} />
      </>
    )
  );
}
