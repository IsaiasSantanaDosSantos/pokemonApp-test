import { useNavigate } from "react-router-dom";
import { HomeContainer } from "./style";
import banner from "../../img/banner.svg";

export const Home = () => {
  const navigate = useNavigate();

  function GoToPokemons() {
    navigate("/pokemons");
  }
  return (
    <HomeContainer>
      <div className="homeContainer">
        <section>
          <h1>
            Qual Pokémon você escolheria?
            <div className="homeRetangulo"></div>
          </h1>

          <p>
            Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e
            habilidades.
          </p>
          <div className="homeBtn">
            <button onClick={GoToPokemons}>Veja os pokémons</button>
          </div>
        </section>
        <article>
          <img src={banner} alt="Banner Pikachu" />
        </article>
      </div>
    </HomeContainer>
  );
};

export default Home;
