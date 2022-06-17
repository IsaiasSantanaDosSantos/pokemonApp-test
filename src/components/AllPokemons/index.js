import { AllPokemonsContainer } from "./style";
import React from "react";
import { useNavigate } from "react-router-dom";

const AllPokemons = ({ id, name, image, specie, type }) => {
  const navigate = useNavigate();

  const openModalShowPokemon = () => {
    navigate("/showpokemondesk");
  };

  return (
    <AllPokemonsContainer>
      <div className="allPokemonsBox" onClick={openModalShowPokemon}>
        <p className="allPokemonsNumber">#{id}</p>
        <p className="allPokemonsName">{name}</p>
        <div className="allPokemonsDiscritionImg">
          <div className="allPokemonsDiscrition">
            <div className="allPokemonsDiscritionTipo">
              <p>{type}</p>
            </div>
            <div className="allPokemonsDiscritionPoder">
              <p>{specie}</p>
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
