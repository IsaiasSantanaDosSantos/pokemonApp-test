import { AllPokemonsContainer } from "./style";
import React from "react";

const AllPokemons = ({ id, name, image, specie, type }) => {
  return (
    <AllPokemonsContainer>
      <div className="allPokemonsBox">
        <p className="allPokemonsNumber">#{id}</p>
        <p className="allPokemonsName">{name}</p>
        <div className="allPokemonsDiscritionImg">
          <div className="allPokemonsDiscrition">
            <div className="allPokemonsDiscritionTipo">
              <p>{specie}</p>
            </div>
            <div className="allPokemonsDiscritionPoder">
              <p>{type}</p>
            </div>
          </div>
          <div className="allPokemonsImg">
            <img src={image} alt={name} />
          </div>
        </div>
      </div>
    </AllPokemonsContainer>
  );
};

export default AllPokemons;
