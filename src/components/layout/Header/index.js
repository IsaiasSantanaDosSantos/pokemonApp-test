import { Link } from "react-router-dom";
import logo from "../../../img/logo.png";
import Container from "@material-ui/core/Container";
import { HeaderContainer } from "./style";

export const Header = () => {
  return (
    <HeaderContainer>
      <div className="headerConteudo">
        <Container>
          <div className="headerConteudo">
            <div className="headerLogo">
              <Link to="/">
                <img src={logo} alt="Logo Pokémon" />
              </Link>
            </div>
            <ul className="headerMenu">
              <li className="headerItens">
                <Link to="/">Home</Link>
              </li>
              <li className="headerItens">
                <Link to="/pokemons">Pokémons</Link>
              </li>
              <li className="headerItens">
                <Link to="/contato">Contato</Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </HeaderContainer>
  );
};

export default Header;
