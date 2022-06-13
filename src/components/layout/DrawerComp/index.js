import React, { useState } from "react";
import {
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

import { DrawerCompContainer } from "./style";
import logo from "../../../img/logo.png";
import Pikachu from "../../../img/pikachu.svg"

//const pages = ["Início", "Cadastro", "Contato"];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <DrawerCompContainer>
                <nav className="drawerCompNavbar">
                  <Link to="/">
                    <img src={logo} alt="Pokémons"></img>
                  </Link>
                  <Container>
                    <ul className="drawerCompList">
                      <li className="item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="item">
                        <Link to="/pokemons">Pokémon</Link>
                      </li>
                      <li className="item">
                        <Link to="/contato">Contato</Link>
                      </li>
                    </ul>
                  </Container>
                  <div className="drawerCompImg">
                    <img src={Pikachu} alt="Pikachu"/>
                  </div>
                </nav>
              </DrawerCompContainer>
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "#000", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
