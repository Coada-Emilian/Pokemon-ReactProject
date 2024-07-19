import React, { useEffect } from 'react';
import getAllPokemon from './Api'

const FetchPokemonData = () => {
  useEffect(() => {
    const fetchData = async () => {
      const pokemonData = await getAllPokemon();
      if (pokemonData) {
        console.log(pokemonData);
      } else {
        console.error('Failed to fetch Pokémon data');
      }
    };

    fetchData();
  }, []);

  return null; // No need to render anything
};

export default FetchPokemonData;