import React from "react";

export default function PokeCard({ sprites, name, video }) {
  return (
    <div className="pokeCard">
      <h1>{name}</h1>
      <div className="pokemonImages">
        <img src={sprites.front_default} alt="Default" />
        <img src={sprites.front_shiny} alt="Shiny" />
      </div>
      <div className="pokemonControls">
        <a href={video} target="blank">
          Go to the video!
        </a>
      </div>
    </div>
  );
}
