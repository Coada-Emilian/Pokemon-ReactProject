/* eslint-disable @typescript-eslint/no-shadow */
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { IPokemon, IType } from '../../../@types/types';
import PokemonArticle from '../Templates/PokemonArticle';
import TypeArticle from '../Templates/TypeArticle';
import '../Main.scss';

interface MainTypePokemonProps {
  pokemons: IPokemon[];
  types: IType[];
  // pokemonsInApi: Result[];
}

export default function MainTypePokemon({
  pokemons,
  types,
}: MainTypePokemonProps) {
  const [foundPokemon, setFoundPokemon] = useState<IPokemon[]>([]);

  const params = useParams();
  const { typeName } = params;
  useEffect(() => {
    const findPokemonByType = (typeName: string | undefined) => {
      const foundPokemons = pokemons.filter((pokemon) =>
        pokemon.types.some((type) => type.name === typeName)
      );
      setFoundPokemon(foundPokemons);
    };
    findPokemonByType(typeName);
  }, [pokemons, typeName]);
  return (
    <main className="container">
      <div className="types-container" id="types-container">
        {types.map((type) => {
          return <TypeArticle type={type} key={type.id} />;
        })}
      </div>

      <div className="pokemon-container">
        {foundPokemon.map((pokemon) => {
          return <PokemonArticle pokemon={pokemon} key={pokemon.id} />;
        })}
      </div>
    </main>
  );
}
