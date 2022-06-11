import styles from "./Home.modulo.css";

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <section>
        <h1>Qual pokemon você escolheria?</h1>
        <div></div>
        <p>
          Você pode saber o tipo de Pokémon, seus pontos <br /> fortes, fracos e
          habilidades.
        </p>
        <button>Veja os pokémons</button>
      </section>
      <img src="../img/banner.svg" alt="Banner Pikachu" />
    </div>
  );
};

export default Home;
