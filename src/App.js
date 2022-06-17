import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pokemons from "./pages/Pokemons";
import Contato from "./pages/Contato";
import Header from "./components/layout/Header";
import ShowPokemonDesck from "./pages/ShowPokemonDesck";

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" activated element={<Home />}></Route>
        <Route path="/pokemons" element={<Pokemons />}></Route>
        <Route path="/contato" element={<Contato />}></Route>
        <Route path="/showpokemondesk" element={<ShowPokemonDesck />}>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
