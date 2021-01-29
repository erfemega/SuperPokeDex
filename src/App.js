import React from "react";

import { mockPokemonData } from "./mock/pokeData";
import PokeCard from "./components/PokeCard";
import "./styles.css";

export default function App() {
  const { sprites, name, video } = mockPokemonData;
  return (
    <div className="App">
      <h1>Welcome to your second mini challenge!</h1>
      <div className="pokemonsContainer">
        <PokeCard sprites={sprites} name={name} video={video} />
      </div>
    </div>
  );
}
