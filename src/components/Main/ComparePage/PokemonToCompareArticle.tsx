import React from 'react';
import { IPokemon } from '../../../@types/types';

interface PokemonToCompareArticleProps {
  pokemon: IPokemon;
}

export default function PokemonToCompareArticle({
  pokemon,
}: PokemonToCompareArticleProps) {
  return <h2>{pokemon.name}</h2>;
}
