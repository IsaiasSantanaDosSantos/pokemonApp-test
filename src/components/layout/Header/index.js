import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from "../../../img/logo.png";
import Container from "@material-ui/core/Container";
import { HeaderContainer } from "./style";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Avatar,
} from "@mui/material";

import DrawerComp from "../DrawerComp";

export const Header = () => {
  const [value, setValue] = useState();

  const theme = useTheme();

  const isMath = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <React.Fragment>
      <AppBar sx={{ backgroundColor: "#ffffff" }} position="sticky">
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
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
