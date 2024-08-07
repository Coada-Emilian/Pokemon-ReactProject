import React from 'react';
import { IPokemon } from '../../../../@types/types';
import pokemonImageSource from '../../../../assets/img/1.webp';

interface TeamPokemonProps {
  pokemon: IPokemon;
}

export default function TeamPokemon({ pokemon }: TeamPokemonProps) {
  const imageSource = `${pokemonImageSource.slice(0, 16)}${pokemon.id}.webp`;
  return (
    <div className="card pokemon__small-image">
      <div className="card-image">
        <figure className="teamPokemon-image">
          <img src={imageSource} alt={pokemon.name} slot="pokemon-image" />
        </figure>
      </div>
    </div>
  );
}
