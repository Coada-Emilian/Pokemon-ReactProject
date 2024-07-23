import { useEffect, useState } from "react";

import getAllPokemon from "./Api/getAllPokemon";

import Header from "./Header/Header";
import Main from "./Main/Main";

import getAllTypes from "./Api/getAllTypes";
import getAllPokemonApi from "./Api/getAllPokemonApi";
import { IPokemonAPI } from "../@types/types";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonApi, setPokemonApi] = useState<IPokemonAPI>({
    count: 0,
    next: "",
    previous: null,
    results: [],
  });

  useEffect(() => {
    const fetchPokemonDataFromApi = async () => {
      const data = await getAllPokemonApi();
      if (data) {
        setPokemonApi(data);
      } else {
        console.log("Failed to fetch Pokemon data");
      }
    };
    fetchPokemonDataFromApi();

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

  const pokemonsInApi = [...pokemonApi.results];

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
      <Main pokemons={pokemons} types={types} pokemonsInApi={pokemonsInApi} />
    </>
  );
}

export default App;
