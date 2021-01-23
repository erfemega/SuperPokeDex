import React from "react";

import { mockPokemonData } from "./mock/pokeData";
import PokeCard from "./components/PokeCard";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to your second mini challenge!</h1>
      <div className="pokemonsContainer">
        <PokeCard pokemonData={mockPokemonData} />
      </div>
    </div>
  );
}
