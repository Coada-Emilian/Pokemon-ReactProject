/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import getAllPokemon from './Api/Pokemon/getAllPokemon';

import Header from './Header/Header';
import Main from './Main/Main';

import getAllTypes from './Api/Types/getAllTypes';

// import getAllPokemonApi from "./Api/getAllPokemonApi";
// import { IPokemonAPI } from "../@types/pokemonApi";
// import getApiPokemonDetails from "./Api/getApiPokemonDetails";

import { IPokemon, ITeam } from '../@types/types';
import MainTypePokemon from './Main/TypePokemonPage/MainTypePokemon';
import TeamPage from './Main/TeamPage/TeamPage';
import ComparePage from './Main/ComparePage/ComparePage';
import getAllTeams from './Api/Teams/getAllTeams';

import CreateTeamPage from './Main/CreateTeamPage/CreateTeamPage';

function App() {
  // const [pokemonApi, setPokemonApi] = useState<IPokemonAPI>({
  //   count: 0,
  //   next: "",
  //   previous: null,
  //   results: [],
  // });

  // useEffect(() => {
  //   const fetchPokemonDataFromApi = async () => {
  //     const data = await getAllPokemonApi();
  //     if (data) {
  //       setPokemonApi(data);
  //     } else {
  //       console.log("Failed to fetch Pokemon data");
  //     }
  //   };
  //   fetchPokemonDataFromApi();
  // }, []);

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

  const [pokemonData, setPokemonData] = useState([]);
  const [typesData, setTypesData] = useState([]);
  const [teamData, setTeamData] = useState<ITeam[]>([]);

  const [pokemonSearchValue, setPokemonSearchValue] = useState<string>('');
  const [foundPokemonArray, setFoundPokemonArray] = useState<IPokemon[]>([]);

  const [teamSearchValue, setTeamSearchValue] = useState<string>('');
  const [foundTeamArray, setFoundTeamArray] = useState<ITeam[]>([]);

  const [isTeamCreated, setIsTeamCreated] = useState<boolean>(false);
  const [createdTeamAvatarSourceArray, setCreatedTeamAvatarSourceArray] =
    useState<string[]>([]);

  useEffect(() => {
    try {
      const fetchPokemonData = async () => {
        const data = await getAllPokemon();
        if (data) {
          setPokemonData(data);
        } else {
          console.log('Failed to fetch Pokemon data');
        }
      };
      fetchPokemonData();

      const fetchTypesData = async () => {
        const data = await getAllTypes();
        if (data) {
          setTypesData(data);
        } else {
          console.log('Failed to fetch Types data');
        }
      };
      fetchTypesData();

      const fetchTeamData = async () => {
        const data = await getAllTeams();
        if (data) {
          setTeamData(data);
        } else {
          console.log('Failed to fetch team data');
        }
      };
      fetchTeamData();
      setIsTeamCreated(false);
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }, [isTeamCreated]);

  const pokemons: IPokemon[] = [...pokemonData];

  pokemons.forEach((pokemon: IPokemon) => {
    pokemon.gif = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemon.id}.gif`;
  });
  const types = [...typesData];

  const teams = [...teamData];

  useEffect(() => {
    try {
      const foundPokemon = pokemons.filter((pokemon: IPokemon) =>
        pokemon.name.toLowerCase().includes(pokemonSearchValue)
      );
      setFoundPokemonArray(foundPokemon);

      const foundTeams = teams.filter((team: ITeam) =>
        team.name.toLowerCase().includes(teamSearchValue)
      );
      setFoundTeamArray(foundTeams);
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }, [pokemonSearchValue, teamSearchValue]);

  return (
    <>
      <Header
        setPokemonSearchValue={setPokemonSearchValue}
        setTeamSearchValue={setTeamSearchValue}
      />
      <Routes>
        <Route
          path="/"
          element={
            foundPokemonArray.length > 0 ? (
              <Main pokemons={foundPokemonArray} types={types} />
            ) : (
              <Main pokemons={pokemons} types={types} />
            )
          }
        />
        <Route
          path="/pokemonsOfType/:typeName"
          element={<MainTypePokemon pokemons={pokemons} types={types} />}
        />
        <Route
          path="/teams"
          element={
            foundTeamArray.length > 0 ? (
              <TeamPage teams={foundTeamArray} />
            ) : (
              <TeamPage teams={teams} />
            )
          }
        />
        <Route
          path="/create/team"
          element={
            <CreateTeamPage
              pokemons={pokemons}
              setIsTeamCreated={setIsTeamCreated}
              createdTeamAvatarSourceArray={createdTeamAvatarSourceArray}
              setCreatedTeamAvatarSourceArray={setCreatedTeamAvatarSourceArray}
            />
          }
        />
        <Route
          path="/compare/:id"
          element={<ComparePage pokemons={pokemons} />}
        />
        <Route path="*" element={<h1>Y U Here?</h1>} />
      </Routes>
    </>
  );
}

export default App;
