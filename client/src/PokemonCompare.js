import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import useFetcher from "./hooks/useFetcher";
import { Line } from "rc-progress";

export default function PokemonCompare(props) {
  const [showDetail, setShowDetail] = useState(true);

  let cardStyleCompare = {
    width: "100%",
    height: "28vh",
    backgroundImage: "url(" + props.imgUrl + ")",
    backgroundPosition: "center"
  };

  const { comparePokemon, fetchComparePokemonDetail } = useFetcher();
  useEffect(() => {
    if (comparePokemon.id) {
      setShowDetail(true);
    }
  }, [comparePokemon]);

  const getComparePokemon = name => {
    setShowDetail(false);
    fetchComparePokemonDetail(name);
  };

  return (
    showDetail && (
      <>
        {comparePokemon.hasOwnProperty("id") && (
          <div className="container" id="compare-container-search">
            <SearchBar getPokemon={getComparePokemon} />
          </div>
        )}
        <div className="card" style={cardStyleCompare}>
          {!comparePokemon.hasOwnProperty("id") && (
            <div className="container" id="compare-container-search">
              <SearchBar getPokemon={getComparePokemon} />
            </div>
          )}
          {comparePokemon.hasOwnProperty("id") && (
            <div>
              <div className="card-body pokemon-compare-card">
                <div className="row">
                  <div className="col-md-3">
                    <h1 className="card-title">
                      {comparePokemon.name.charAt(0).toUpperCase() +
                        comparePokemon.name.slice(1)}
                    </h1>
                    <hr />
                    <h5>Type: {comparePokemon.types[0].type.name}</h5>
                    <hr />
                    {/* <h5>Notable abilities: </h5> */}
                    {/* {comparePokemon.abilities.map(({ ability }) => <h5>&bull;&nbsp;{ability.name}</h5>)} */}
                    {/* {comparePokemon.stats.map((field, i) => <p className="card-text" key={i} >{field.stat.name}: {field.base_stat}</p>)} */}
                  </div>
                  <div className="col-md-5">
                    <u>
                      <h6>Stats field - Power: {props.power}</h6>
                    </u>
                    {comparePokemon.stats.map((field, i) => (
                      <>
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
                      src={comparePokemon.sprites.front_default}
                      width="100"
                      height="180"
                      alt="Front_Pokemon_Image"
                    />
                  </div>
                </div>
                <hr />
                <div className="moveset">
                  <div className="row">
                    <h5>Moveset:</h5>
                    |&nbsp;
                    {comparePokemon.moves.slice(0, 10).map(({ move }, i) => (
                      <p className="card-text" key={i}>
                        <strong>{move.name} |&nbsp;</strong>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    )
  );
}
