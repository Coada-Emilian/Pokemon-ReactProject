/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';

import { IPokemon } from '../../../../../@types/types';

import PokemonEvolutionFigure from './EvolutionFigures/PokemonEvolutionFigure';
import PokemonEvolutionIcon from './EvolutionFigures/PokemonEvolutionIcon';
import getPokemonById from '../../../../Api/getPokemonById';

import './PokemonEvolutions.scss';

interface PokemonProps {
  pokemon: IPokemon;
}

export default function PokemonEvolutions({ pokemon }: PokemonProps) {
  const [devolvedPokemon, setDevolvedPokemon] = useState<IPokemon>();
  const [evolvedPokemon, setEvolvedPokemon] = useState<IPokemon>();
  const [evolution, setEvolution] = useState(true);

  useEffect(() => {
    const fetchEvolutions = async () => {
      if (pokemon.devolution_id) {
        const devolvedPokemonData = await getPokemonById(pokemon.devolution_id);
        setDevolvedPokemon(devolvedPokemonData);
      }
      if (pokemon.evolution_id) {
        const evolvedPokemonData = await getPokemonById(pokemon.evolution_id);
        setEvolvedPokemon(evolvedPokemonData);
      }
      if (!pokemon.evolution_id && !pokemon.devolution_id) {
        console.log('no evolution');
        setEvolution(false);
      }
    };

    fetchEvolutions();
  }, [pokemon.devolution_id, pokemon.evolution_id]);
  return (
    <div className="pokemonModal-evolutions">
      <div className="pokemonModal-evolutions-title">
        <p className="pokemonModal-evolutions-paragraph">Evolutions</p>
      </div>
      {!evolution && (
        <div className="evolution-message">
          <p className="evolution-paragraph">Ce Pokemon n'a pas d'evolution</p>
        </div>
      )}
      <div className="pokemonModal-evolutions-figures">
        {devolvedPokemon && (
          <>
            <PokemonEvolutionFigure pokemon={devolvedPokemon} />
            <PokemonEvolutionIcon />
          </>
        )}
        <PokemonEvolutionFigure pokemon={pokemon} />
        {evolvedPokemon && (
          <>
            <PokemonEvolutionIcon />
            <PokemonEvolutionFigure pokemon={evolvedPokemon} />
          </>
        )}
      </div>
    </div>
  );
}
