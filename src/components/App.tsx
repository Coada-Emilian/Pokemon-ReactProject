import { useEffect, useState } from "react";

import getAllPokemon from "./Api/getAllPokemon";

import Header from "./Header/Header";
import Main from "./Main/Main";

import getAllTypes from "./Api/getAllTypes";
// import getAllPokemonApi from "./Api/getAllPokemonApi";
// import { IPokemonAPI } from "../@types/pokemonApi";
import getApiPokemonDetails from "./Api/getApiPokemonDetails";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  // const [pokemonApi, setPokemonApi] = useState<IPokemonAPI>({
  //   count: 0,
  //   next: "",
  //   previous: null,
  //   results: [],
  // });

  useEffect(() => {
    // const fetchPokemonDataFromApi = async () => {
    //   const data = await getAllPokemonApi();
    //   if (data) {
    //     setPokemonApi(data);
    //   } else {
    //     console.log("Failed to fetch Pokemon data");
    //   }
    // };
    // fetchPokemonDataFromApi();

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
  pokemons.forEach((pokemon) => {
    pokemon.gif = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemon.id}.gif`;
  });

  // const pokemonsInApi = [...pokemonApi.results];

  // const fetchPokemonDetails = async (pokemon) => {
  //   const data = await getApiPokemonDetails(pokemon.url);
  //   if (data) {
  //     return data;
  //   } else {
  //     console.log("Failed to fetch data");
  //   }
  // };

  // pokemonsInApi.forEach(async (pokemon) => {
  //   const id = parseInt(pokemon.url.slice(34));
  //   pokemon.id = id;
  //   const data = await fetchPokemonDetails(pokemon);
  //   pokemon.abilities = data.abilities;
  //   pokemon.base_experience = data.base_experience;
  //   pokemon.cries = data.cries;
  //   pokemon.forms = data.forms;
  //   pokemon.game_indices = data.game_indices;
  //   pokemon.height = data.height;
  //   pokemon.held_items = data.held_items;
  //   pokemon.id = data.id;
  //   pokemon.is_default = data.is_default;
  //   pokemon.location_area_encounters = data.location_area_encounters;
  //   pokemon.moves = data.moves;
  //   pokemon.name = data.name;
  //   pokemon.order = data.order;
  //   pokemon.past_abilities = data.past_abilities;
  //   pokemon.past_types = data.past_types;
  //   pokemon.species = data.species;
  //   pokemon.sprites = data.sprites;
  //   pokemon.stats = data.stats;
  //   pokemon.types = data.types;
  //   pokemon.weight = data.weight;
  // });

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
