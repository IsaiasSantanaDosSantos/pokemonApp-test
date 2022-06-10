import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from './../../img/logo.png';

export const Navbar = () => {
  return (
    <ul className={styles.list}>
      <li>
        <Link to="/">{logo}</Link>
      </li>
      <li className={styles.itens}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.itens}>
        <Link to="/pokemons">Pokémons</Link>
      </li>
      <li className={styles.itens}>
        <Link to="/contato">Contato</Link>
      </li>
    </ul>
  );
};

export default Navbar;
