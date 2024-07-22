import { useEffect, useState } from "react";

import getAllPokemon from "./Api/getAllPokemon";

import Header from "./Header/Header";
import Main from "./Main/Main";
import CreateTeamModal from "./Main/Modals/CreateTeamModal";
import TeamModal from "./Main/Modals/TeamModal/TeamModal";
import PokemonModal from "./Main/Modals/PokemonModal/PokemonModal";
import EditTeamNameModal from "./Main/Modals/EditTeamNameModal";
import HamburgerModal from "./Main/Modals/HamburgerModal";
import getAllTypes from "./Api/getAllTypes";

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const data = await getAllPokemon();
      if (data) {
        setPokemonData(data);
      } else {
        console.log("Failed to fetch Pokemon data");
      }
    };
    fetchPokemonData();
  }, []);

  const pokemons = [...pokemonData];

  const [typesData, setTypesData] = useState([]);
  useEffect(() => {
    const fetchTypesData = async () => {
      const data = await getAllTypes();
      if (data) {
        setTypesData(data);
      } else {
        console.log("Failed to fetch Types data");
      }
    };
    fetchTypesData();
  }, []);

  const types = [...typesData];

  return (
    <>
      <Header />
      <Main pokemons={pokemons} types={types} />
    </>
  );
}

export default App;
