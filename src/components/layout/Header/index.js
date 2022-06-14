import { Link } from "react-router-dom";
import React from "react";
import logo from "../../../img/logo.png";
import { HeaderContainer } from "./style";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import DrawerComp from "../DrawerComp";

export const Header = () => {
  const theme = useTheme();
  const smallScreens = 768;

  const isMath = useMediaQuery(theme.breakpoints.down(smallScreens));

  return (
    <React.Fragment>
      <AppBar
        sx={{
          backgroundColor: "#ffffff",
          paddingLeft: "9%",
          paddingRight: "13%",
        }}
        position="sticky"
      >
        <Toolbar>
          {isMath ? (
            <HeaderContainer>
              <div className="headerConteudo">
                <Link to="/">
                  <img src={logo} alt="Pokémons"></img>
                </Link>
                <Typography></Typography>
                <DrawerComp />
              </div>
            </HeaderContainer>
          ) : (
            <>
              <Container>
                <HeaderContainer>
                  <div className="headerConteudo">
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
                  </div>
                </HeaderContainer>
              </Container>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
