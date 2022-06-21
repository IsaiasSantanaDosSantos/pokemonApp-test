import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { PokemonsContainer } from "./style";
import lupa from "./../../img/lupa.png";
import AllPokemons from "../../components/AllPokemons";
import ShowPokemonDesck from "../ShowPokemonDesck";
import SelectSection from "../../components/layout/SelectSection";

export const Pokemons = () => {
  const [buscarPokemon, setBuscarPokemon] = useState("");
  const [verPokemon, setVerPokemon] = useState(false);

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

  const showNewPokemon = async (buscarPokemon) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${buscarPokemon}`;
    const response = await fetch(url);
    return await response.json();
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  //console.log(buscarPokemon);

/*
Difculdade:
Para selecionar apenas um pokémon ao clicar para ver no modal;
Buscar um pokémon na lista da api
*/
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
          </div>
          <SelectSection />
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
                onClick={() => setPokemonsList(pokemons.id)}
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
