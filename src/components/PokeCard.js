import React from "react";

export default function PokeCard(props) {
  return (
    <div className="pokeCard">
      <h1>{props.pokemonData.name}</h1>
      <div className="pokemonImages">
        <img src={props.pokemonData.sprites.front_default} alt="Default" />
        <img src={props.pokemonData.sprites.front_shiny} alt="Shiny" />
      </div>
      <div className="pokemonControls">
        <a href={props.pokemonData.video} target="blank">
          Go to the video!
        </a>
      </div>
    </div>
  );
}
