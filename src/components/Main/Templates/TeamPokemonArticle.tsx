import React from 'react';
import { IPokemon } from '../../../@types/types';
import pokemonImage from '../../../assets/img/1.webp';

interface TeamPokemonArticleProps {
  pokemon: IPokemon;
}

export default function TeamPokemonArticle({
  pokemon,
}: TeamPokemonArticleProps) {
  const imageSource = `${pokemonImage.slice(0, 16)}${pokemon.id}.webp`;

  return (
    <div className="pokemon-article-image">
      <figure className="image is-64x64">
        <img
          src={imageSource}
          alt={pokemon.name}
          slot="pokemon-image"
          className="pokemon-img"
        />
      </figure>
    </div>
  );
}
