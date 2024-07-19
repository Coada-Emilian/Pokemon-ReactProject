import { useEffect, useState } from 'react';
import './App.scss';
import getAllPokemon from './Api/Api';

import Header from './Header/Header';
import Main from './Main/Main';



function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const data = await getAllPokemon();
      if (data) {
        setPokemonData(data);
      } else {
        console.log("Failed to fetch Pokemon data")
      }
    };
    fetchPokemonData();
  }, []);

  return (
    <>
      <Header />
      <Main />
    </>   
  )
}

export default App;
