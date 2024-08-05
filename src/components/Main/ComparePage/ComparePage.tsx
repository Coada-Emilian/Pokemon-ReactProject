import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { IPokemon } from '../../../@types/types';

import TeamPokemonArticle from '../Templates/TeamPokemonArticle';
import ComparePokemonArticle from './ComparePokemonArticle';
import ReturnToPokedexButton from '../../Buttons/ReturnToPokedexButton';

import './ComparePage.scss';

interface ComparePageProps {
  pokemons: IPokemon[];
}

export default function ComparePage({ pokemons }: ComparePageProps) {
  const [isPokemonChosen, setIsPokemonChosen] = useState(false);
  const [comparedPokemonId, setComparedPokemonId] = useState<number>(0);
  const [pokemonToCompare, setPokemonToCompare] = useState<
    IPokemon | undefined
  >(undefined);
  const [chosenPokemon, setChosenPokemon] = useState<IPokemon | undefined>(
    undefined
  );

  const params = useParams();
  const pokemonId = Number(params.id);

  useEffect(() => {
    const foundPokemon = pokemons.find((pokemon) => pokemon.id === pokemonId);
    if (foundPokemon) {
      setPokemonToCompare(foundPokemon);
    } else {
      console.log('Failed to find pokemon');
    }
  }, [pokemons, pokemonId]);

  return (
    <div className="compare-main">
      <div className="compare-container">
        {pokemonToCompare && (
          <ComparePokemonArticle pokemon={pokemonToCompare} />
        )}
        {isPokemonChosen && comparedPokemonId ? (
          <ComparePokemonArticle pokemon={chosenPokemon} />
        ) : (
          <div className="pokemon-list">
            {pokemons.map((pokemon) => {
              const chosenPokemonId = pokemon.id;
              const foundChosenPokemon = pokemons.find(
                (monster) => monster.id === chosenPokemonId
              );

              return (
                <div className="small-compare-article" key={pokemon.name}>
                  <button
                    type="button"
                    onClick={() => {
                      setIsPokemonChosen(true);
                      setComparedPokemonId(chosenPokemonId);
                      setChosenPokemon(foundChosenPokemon);
                    }}
                    aria-label={`Compare with ${pokemon.name}`}
                  >
                    <TeamPokemonArticle pokemon={pokemon} key={pokemon.id} />
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <ReturnToPokedexButton />
    </div>
  );
}
