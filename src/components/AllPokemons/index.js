import { AllPokemonsContainer } from "./style";
import React from "react";
import bulbasaur from "../../img/bulbasaur.png";

const AllPokemons = () => {
  return (
    <AllPokemonsContainer>
      <div className="allPokemonsBox">
        <p className="allPokemonsNumber">#001</p>
        <p className="allPokemonsName">Bulbasaur</p>
        <div className="allPokemonsDiscritionImg">
          <div className="allPokemonsDiscrition">
            <div className="allPokemonsDiscritionTipo">
              <p>Planta</p>
            </div>
            <div className="allPokemonsDiscritionPoder">
              <p>Venenoso</p>
            </div>
          </div>
          <div className="allPokemonsImg">
            <img src={bulbasaur} alt="bulbasaur" />
          </div>
        </div>
      </div>
    </AllPokemonsContainer>
  );
};

export default AllPokemons;
