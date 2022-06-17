import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { PokemonsContainer } from "./style";
import lupa from "./../../img/lupa.png";

import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import AllPokemons from "../../components/AllPokemons";
import ShowPokemonDesck from "../ShowPokemonDesck";

export const Pokemons = () => {
  const [tipo, setTipo] = useState(false);
  const [ataque, setAtaque] = useState(false);
  const [defesa, setDefesa] = useState(false);
  const [buscarPoekemon, setBuscarPokemon] = useState("");
  const [verPokemon, setVerPokemon] = useState(false);

  const showTipo = () => setTipo(true);
  const hiderTipo = () => setTipo(false);
  const showAtaque = () => setAtaque(true);
  const hiderAtaque = () => setAtaque(false);
  const showDefesa = () => setDefesa(true);
  const hiderDefesa = () => setDefesa(false);

  const [allPokemons, setAllPokemos] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=18"
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
        //console.log("nome é: " + pokemon.name);
        /* console.log(
          "nome é: " +
            data.name +
            "\nID é: " +
            data.id +
            "\nAltura é: " +
            data.height +
            "0 cm" +
            "\nPeso é: " +
            data.weight +
            "\nExperience é: " +
            data.base_experience +
            "\nPoder é: " +
            data.abilities[0].ability.name +
            "\nForça é: " +
            data.moves[0].move.name +
            "\nImagem é: " +
            data.sprites.other.dream_world.front_default
        );*/
      });
    }

    createPokemonObject(data.results);
    // await console.log(allPokemons);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  const buscarPokemonLista = () => {
    /*if (buscarPoekemon === data.name) {
      console.log(buscarPoekemon);
    } else {
      console.log(data);
      //console.log("Não há pokémon com esse: '" + buscarPoekemon + "'");
    }
    */
  };

  const openModal = () => {
    console.log("Deu!");
    setVerPokemon(true);
  };

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
              onChange={(e) => setBuscarPokemon(e.target.value)}
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
          <div className="pkemonsAllpokemonsBox" onClick={openModal}>
            {allPokemons.map((pokemonsStarts, index) => (
              <AllPokemons
                key={index}
                id={pokemonsStarts.id}
                image={pokemonsStarts.sprites.other.dream_world.front_default}
                name={pokemonsStarts.name}
                specie={pokemonsStarts.species.name}
                type={pokemonsStarts.types[0].type.name}
              />
            ))}
          </div>
          {verPokemon ? (
            <ShowPokemonDesck
              onClose={() => setVerPokemon(false)}
            ></ShowPokemonDesck>
          ) : null}
        </div>

        <div className="pkemonsBtn">
          <button>Mostrar pokemon</button>
        </div>
      </PokemonsContainer>
    </Container>
  );
};

export default Pokemons;
