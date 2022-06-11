import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../img/logo.png";
import Container from "@material-ui/core/Container";

export const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <Container>
        <div className={styles.navbarConteudo}>
          <div className={styles.navbarLogo}>
            <Link to="/">
              <img src={logo} alt="Logo Pokémon" />
            </Link>
          </div>
          <ul className={styles.navbarMenu}>
            <li className={styles.navbarItens}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.navbarItens}>
              <Link to="/pokemons">Pokémons</Link>
            </li>
            <li className={styles.navbarItens}>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
