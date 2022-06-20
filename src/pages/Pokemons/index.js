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
  const [buscarPokemon, setBuscarPokemon] = useState("");
  const [verPokemon, setVerPokemon] = useState(false);

  const showTipo = () => setTipo(true);
  const hiderTipo = () => setTipo(false);
  const showAtaque = () => setAtaque(true);
  const hiderAtaque = () => setAtaque(false);
  const showDefesa = () => setDefesa(true);
  const hiderDefesa = () => setDefesa(false);

  const [pokemonsList, setPokemonsList] = useState([]);
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

        setPokemonsList((currentList) => [...currentList, data]);
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

    // await console.log(pokemonsList);
  };

  const showNewPokemon = async (pokemon) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    return await response.json();
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  const openModal = (index) => {
    //console.log("Deu!");
    setVerPokemon(index);
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
            <div className="pokemonsIcon" onClick={showNewPokemon}>
              <img src={lupa} alt="Lupa" />
            </div>
            {/* TESTE
            {pokemonsList.map((pokemons, index) => (
              <>
                {buscarPokemon === pokemons.name ? (
                  <ShowPokemonDesck
                    onClose={() => setVerPokemon(false)}
                    onClick={() => {
                      openModal(index.id);
                    }}
                    key={index}
                    id={pokemons.id}
                    image={pokemons.sprites.other.dream_world.front_default}
                    name={pokemons.name}
                    specie={pokemons.species.name}
                    type={pokemons.types[0].type.name}
                    experience={pokemons.base_experience}
                    weight={pokemons.weight}
                    height={pokemons.height}
                    abilities={pokemons.abilities[0].ability.name}
                  ></ShowPokemonDesck>
                ) : (
                  console.log(
                    `O POKÉMON ${buscarPokemon} NÃO FOI ENCONTRADO, \nverifique se o nome está correto!`
                  )
                )}
              </>
            ))}
             FIM TESTE */}
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
          <div
            className="pokemonsAllpokemonsBox"
            onClick={() => {
              setVerPokemon(true);
            }}
          >
            {pokemonsList.map((pokemonsStarts, index) => (
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
        </div>
        {pokemonsList.map((pokemons, index) => (
          <>
            {verPokemon ? (
              <ShowPokemonDesck
                onClose={() => setVerPokemon(false)}
                onClick={() => {
                  openModal(index.id);
                }}
                key={index}
                id={pokemons.id}
                image={pokemons.sprites.other.dream_world.front_default}
                name={pokemons.name}
                specie={pokemons.species.name}
                type={pokemons.types[0].type.name}
                experience={pokemons.base_experience}
                weight={pokemons.weight}
                height={pokemons.height}
                abilities={pokemons.abilities[0].ability.name}
              ></ShowPokemonDesck>
            ) : null}
          </>
        ))}
        <div className="pokemonsBtn">
          <button onClick={() => getAllPokemons()}>Mostrar mais pokemon</button>
        </div>
      </PokemonsContainer>
    </Container>
  );
};

export default Pokemons;
