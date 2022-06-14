import { Container } from "@mui/material";
import { useState } from "react";
import { PokemonsContainer } from "./style";

export const Pokemons = () => {
  const [tipo, setTipo] = useState(false);

  const showTipo = () => setTipo(true);
  const hiderTipo = () => setTipo(false);

  return (
    <Container>
      <PokemonsContainer>
        <div className="pokemonsContainer">
          <h1>Mais de 250 Pokemons para você escolher o seu favorito</h1>
          <input
            className="pokemonsSearch"
            type="search"
            name="search"
            placeholder="Pesquisar pokémon"
          ></input>
          <div className="pokemonsGroupSelect">
            <div className="pkemonsSelectTipoCheckbox">
              <select
                name="tipo"
                className="pokemonsSelectTipo"
                onClick={showTipo}
              >
                <option value="tipo">Tipo</option>
              </select>
              {tipo ? (
                <div className="pokemonsCheckboxTipo">
                  <input type="checkbox" name="tipo" value="Fogo" />
                  {" Fogo"}
                  <br />
                  <input type="checkbox" name="tipo" value="Planta" />
                  {" Planta "}
                  <br />
                  <input type="checkbox" name="tipo" value="Eletrico" />
                  {" Eletrico "}
                  <br />
                  <input type="checkbox" name="tipo" value="Agua" />
                  {" Água"}
                  <br />
                  <input type="checkbox" name="tipo" value="Normal" />
                  {" Normal"}
                </div>
              ) : null}
            </div>
          </div>
          <div className="pokemonsType">
            <div className="pokemonsUn">
              <p className="pokemonsId"></p>
              <p className="pokemonsName"></p>
              <div className="pokemonsForceImg">
                <div className="pokemonsForce">
                  <p>Bulbasaur</p>
                  <p>Venenoso</p>
                </div>
                <div className="pokemonsImg">
                  <img src="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PokemonsContainer>
    </Container>
  );
};

export default Pokemons;
