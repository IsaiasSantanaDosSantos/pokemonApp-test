import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Pokemons from './pages/Pokemons';
import Contato from './pages/Contato';
import Navbar from './components/layout/Navbar';
import Container from '@material-ui/core/Container';

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pokemons" element={<Pokemons />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
