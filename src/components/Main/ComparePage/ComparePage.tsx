/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import { IPokemon } from '../../../@types/types';
import PokemonStats from '../Modals/PokemonModal/PokemonStats/PokemonStats';

import PokemonEvolutions from '../Modals/PokemonModal/PokemonEvolutions/PokemonEvolutions';
import TeamPokemonArticle from '../Templates/TeamPokemonArticle';

import './ComparePage.scss';
import TypeArticle from '../Templates/TypeArticle';
import ComparePokemonArticle from './ComparePokemonArticle';

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
    <div className="compare-container">
      {pokemonToCompare && <ComparePokemonArticle pokemon={pokemonToCompare} />}
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
                <Link
                  to="#"
                  onClick={() => {
                    setIsPokemonChosen(true);
                    setComparedPokemonId(chosenPokemonId);
                    setChosenPokemon(foundChosenPokemon);
                  }}
                >
                  <TeamPokemonArticle pokemon={pokemon} key={pokemon.id} />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
