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

import { IPokemon, ITeam, IType } from '../@types/types';
import MainTypePokemon from './Main/TypePokemonPage/MainTypePokemon';
import TeamPage from './Main/TeamPage/TeamPage';
import ComparePage from './Main/ComparePage/ComparePage';
import getAllTeams from './Api/Teams/getAllTeams';

import CreateTeamPage from './Main/CreateTeamPage/CreateTeamPage';

function App() {
  const [pokemonData, setPokemonData] = useState<IPokemon[]>([]);
  const [typesData, setTypesData] = useState<IType[]>([]);
  const [teamData, setTeamData] = useState<ITeam[]>([]);

  const [pokemonSearchValue, setPokemonSearchValue] = useState<string>('');
  const [foundPokemonArray, setFoundPokemonArray] = useState<IPokemon[]>([]);

  const [teamSearchValue, setTeamSearchValue] = useState<string>('');
  const [foundTeamArray, setFoundTeamArray] = useState<ITeam[]>([]);

  const [isTeamCreated, setIsTeamCreated] = useState<boolean>(false);
  const [createdTeamAvatarSourceArray, setCreatedTeamAvatarSourceArray] =
    useState<string[]>([]);

  const [isCreateButtonShown, setIsCreateButtonShown] = useState(false);

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
        isCreateButtonShown={isCreateButtonShown}
        setIsCreateButtonShown={setIsCreateButtonShown}
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
              setIsCreateButtonShown={setIsCreateButtonShown}
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
