import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { PokemonsContainer } from "./style";
import lupa from "./../../img/lupa.png";

import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import AllPokemons from "../../components/AllPokemons";

export const Pokemons = () => {
  const [tipo, setTipo] = useState(false);
  const [ataque, setAtaque] = useState(false);
  const [defesa, setDefesa] = useState(false);

  const showTipo = () => setTipo(true);
  const hiderTipo = () => setTipo(false);
  const showAtaque = () => setAtaque(true);
  const hiderAtaque = () => setAtaque(false);
  const showDefesa = () => setDefesa(true);
  const hiderDefesa = () => setDefesa(false);

  const [allPokemons, setAllPokemos] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();

        setAllPokemos((currentList) => [...currentList, data]);
      });
    }

    createPokemonObject(data.results);

    await console.log(allPokemons);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <Container>
      <PokemonsContainer>
        <div className="pokemonsContainer">
          <h1>Mais de 250 Pokemons para você escolher o seu favorito</h1>
          <div className="pokemonsSearchIcon">
            <input
              className="pokemonsSearch"
              type="search"
              name="search"
              placeholder="Pesquisar pokémon"
            ></input>
            <div className="pokemonsIcon">
              <img src={lupa} alt="Lupa" />
            </div>
          </div>
          <div className="pokemonsGroupSelect">
            <div className="pkemonsSelectTipoCheckbox">
              <div name="tipo" className="pokemonsSelectTipo">
                <p>Tipo</p>
                {tipo ? (
                  <KeyboardArrowUpOutlinedIcon
                    onClick={hiderTipo}
                    className="pokemonsIcons"
                  ></KeyboardArrowUpOutlinedIcon>
                ) : (
                  <KeyboardArrowDownOutlinedIcon
                    onClick={showTipo}
                    className="pokemonsIcons"
                  ></KeyboardArrowDownOutlinedIcon>
                )}
              </div>
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

            <div className="pkemonsSelectTipoCheckbox">
              <div name="ataque" className="pokemonsSelectAtaque">
                <p>Ataque</p>
                {ataque ? (
                  <KeyboardArrowUpOutlinedIcon
                    onClick={hiderAtaque}
                    className="pokemonsIcons"
                  ></KeyboardArrowUpOutlinedIcon>
                ) : (
                  <KeyboardArrowDownOutlinedIcon
                    onClick={showAtaque}
                    className="pokemonsIcons"
                  ></KeyboardArrowDownOutlinedIcon>
                )}
              </div>
              {ataque ? (
                <div className="pokemonsCheckboxTipo">
                  <input type="checkbox" name="ataque" value="Fogo" />
                  {" Fogo"}
                  <br />
                  <input type="checkbox" name="ataque" value="Planta" />
                  {" Planta "}
                  <br />
                  <input type="checkbox" name="ataque" value="Eletrico" />
                  {" Eletrico "}
                  <br />
                  <input type="checkbox" name="ataque" value="Agua" />
                  {" Água"}
                  <br />
                  <input type="checkbox" name="ataque" value="Normal" />
                  {" Normal"}
                </div>
              ) : null}
            </div>

            <div className="pkemonsSelectTipoCheckbox">
              <div name="ataque" className="pokemonsSelectDefesa">
                <p>Defesa</p>
                {defesa ? (
                  <KeyboardArrowUpOutlinedIcon
                    onClick={hiderDefesa}
                    className="pokemonsIcons"
                  ></KeyboardArrowUpOutlinedIcon>
                ) : (
                  <KeyboardArrowDownOutlinedIcon
                    onClick={showDefesa}
                    className="pokemonsIcons"
                  ></KeyboardArrowDownOutlinedIcon>
                )}
              </div>
              {defesa ? (
                <div className="pokemonsCheckboxTipo">
                  <input type="checkbox" name="defesa" value="Fogo" />
                  {" Fogo"}
                  <br />
                  <input type="checkbox" name="defesa" value="Planta" />
                  {" Planta "}
                  <br />
                  <input type="checkbox" name="defesa" value="Eletrico" />
                  {" Eletrico "}
                  <br />
                  <input type="checkbox" name="defesa" value="Agua" />
                  {" Água"}
                  <br />
                  <input type="checkbox" name="defesa" value="Normal" />
                  {" Normal"}
                </div>
              ) : null}
            </div>
          </div>
          <AllPokemons />
        </div>
      </PokemonsContainer>
      <button>Carregar mais</button>
    </Container>
  );
};

export default Pokemons;
