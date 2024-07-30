/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CreateTeamModal from './CreateTeamModal/CreateTeamModal';
import './CreateTeamPage.scss';
import { IPokemon } from '../../../@types/types';
import TeamPokemonArticle from '../Templates/TeamPokemonArticle';

interface CreateTeamPageProps {
  pokemons: IPokemon[];
}

export default function CreateTeamPage({ pokemons }: CreateTeamPageProps) {
  const [arePokemonShown, setArePokemonShown] = useState(false);
  const [chosenPokemonArray, setChosenPokemonArray] = useState<number[]>([]);
  const [chosenPokemon, setChosenPokemon] = useState<IPokemon[]>([]);
  useEffect(() => {
    if (chosenPokemon.length > 0) {
      setChosenPokemon([]);
    }
    chosenPokemonArray.forEach((id) => {
      const foundChosenPokemon = pokemons.find((pokemon) => pokemon.id === id);

      const newChosenPokemonArray = [...chosenPokemon, foundChosenPokemon];
      setChosenPokemon(newChosenPokemonArray);
    });
  }, [chosenPokemonArray]);
  console.log(chosenPokemon);
  return (
    <div className="createTeam-main">
      <CreateTeamModal setArePokemonShown={setArePokemonShown} />
      {arePokemonShown && (
        <>
          <p className="createTeam-message">Choisissez jusqu'à 6 Pokémon</p>
          <div className="createTeam-pokemonList">
            {pokemons.map((pokemon) => (
              <Link
                to="#"
                key={pokemon.name}
                className="createTeam-pokemon-link"
                onClick={(event) => {
                  const target = event?.currentTarget;
                  target.classList.contains('chosen')
                    ? (target.classList.remove('chosen'),
                      setChosenPokemonArray(
                        chosenPokemonArray.filter((id) => id !== pokemon.id)
                      ))
                    : (target.classList.add('chosen'),
                      setChosenPokemonArray([
                        ...chosenPokemonArray,
                        pokemon.id,
                      ]));
                }}
              >
                <TeamPokemonArticle pokemon={pokemon} key={pokemon.id} />
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
