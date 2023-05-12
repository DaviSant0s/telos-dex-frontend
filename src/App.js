import './App.css';
import Header from './components/header';
import PokemonsDetails from './components/pokemonsDetails';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <PokemonsDetails/>
      {/* <Header/>
      <Home/> */}
    </div>
  );
}

export default App;
