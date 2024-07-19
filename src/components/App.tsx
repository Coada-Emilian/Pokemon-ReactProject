import { useEffect, useState } from 'react';
import './App.scss';

import getAllPokemon from './Api/Api';

import Header from './Header/Header';
import Main from './Main/Main';
import CreateTeamModal from './Main/Modals/CreateTeamModal';
import TeamModal from './Main/Modals/TeamModal/TeamModal';
import PokemonModal from './Main/Modals/PokemonModal/PokemonModal';
import EditTeamNameModal from './Main/Modals/EditTeamNameModal';
import HamburgerModal from './Main/Modals/HamburgerModal';



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
    const pokemons = [...pokemonData];
  return (
    <>
      <CreateTeamModal />
      <TeamModal />
      <PokemonModal />
      <EditTeamNameModal />
      <HamburgerModal />

      <Header />
      <Main pokemons={pokemons}/>
    </>   
  )
}

export default App;
