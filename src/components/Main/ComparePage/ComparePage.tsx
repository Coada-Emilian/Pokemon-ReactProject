import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { IPokemon, IType } from '../../../@types/types';
import PokemonToCompareArticle from './PokemonToCompareArticle';

interface ComparePageProps {
  pokemons: IPokemon[];
  types: IType[];
}

export default function ComparePage({ pokemons, types }: ComparePageProps) {
  const [pokemonToCompare, setPokemontoCompare] = useState<
    IPokemon | undefined
  >(undefined);

  const params = useParams();
  const pokemonId = Number(params.id);
  useEffect(() => {
    const foundPokemon = pokemons.find((pokemon) => pokemon.id === pokemonId);
    if (foundPokemon) {
      setPokemontoCompare(foundPokemon);
    } else {
      console.log('Failed to find pokemon');
    }
  }, [pokemons, pokemonId]);
  return <h1>PokemonToCompareArticle</h1>;
}
