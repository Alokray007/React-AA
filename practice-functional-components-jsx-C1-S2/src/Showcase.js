import React from "react";
import BulbasaurImage from "./images/bulbasaur.jpg";
import "./Showcase.css";

function Showcase() {
  const favPokemon = "Bulbasaur";

  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip"
  };

  return (
    <div className="flex">
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={BulbasaurImage} alt={favPokemon} className="img" />
      <h2>
        {favPokemon}'s type is{" "}
        <span className="firstStyle">{pokeCharacteristics.type}</span> and one
        of their moves is{" "}
        <span className="secondStyle">{pokeCharacteristics.move}</span>.
      </h2>
    </div>
  );
}

export default Showcase;
