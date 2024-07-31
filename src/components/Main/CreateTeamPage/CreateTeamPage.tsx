/* eslint-disable no-lonely-if */
/* eslint-disable no-lone-blocks */
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
  const [maximumPokemonMessage, setMaximumPokemonMessage] =
    useState<boolean>(false);

  useEffect(() => {
    if (chosenPokemon.length > 0) {
      setChosenPokemon([]);
    }
    const newChosenPokemonArray: IPokemon[] = [];
    chosenPokemonArray.forEach((id) => {
      const foundChosenPokemon = pokemons.find((pokemon) => pokemon.id === id);
      if (!foundChosenPokemon) {
        console.log('Pokemon not found');
      } else {
        newChosenPokemonArray.push(foundChosenPokemon);
      }
    });
    setChosenPokemon(newChosenPokemonArray);
  }, [chosenPokemonArray]);

  useEffect(() => {
    const pokemonArticles = document.querySelectorAll('.pokemon-article-image');
    if (chosenPokemonArray.length >= 6) {
      pokemonArticles.forEach((article) => article.classList.add('maximum'));
    } else {
      pokemonArticles.forEach((article) => article.classList.remove('maximum'));
    }
  }, [chosenPokemon]);

  return (
    <div className="createTeam-main">
      <CreateTeamModal
        setArePokemonShown={setArePokemonShown}
        chosenPokemon={chosenPokemon}
      />
      {arePokemonShown && (
        <>
          <p className="createTeam-message">Choisissez jusqu'à 6 Pokémon</p>
          {maximumPokemonMessage && (
            <p className="maximumPokemon-paragraph">
              Nombre de Pokémon maximum atteint
            </p>
          )}
          <div className="createTeam-pokemonList">
            {pokemons.map((pokemon) => (
              <Link
                to="#"
                key={pokemon.name}
                className="createTeam-pokemon-link"
                onClick={(event) => {
                  const target = event?.currentTarget;
                  {
                    // chosenPokemonArray.length >= 6
                    //   ? target.classList.contains('chosen')
                    //     ? (target.classList.remove('chosen'),
                    //       setChosenPokemonArray(
                    //         chosenPokemonArray.filter((id) => id !== pokemon.id)
                    //       ),
                    //       setMaximumPokemonMessage(false))
                    //     : setMaximumPokemonMessage(true)
                    //   : target.classList.contains('chosen')
                    //     ? (target.classList.remove('chosen'),
                    //       setChosenPokemonArray(
                    //         chosenPokemonArray.filter((id) => id !== pokemon.id)
                    //       ))
                    //     : (target.classList.add('chosen'),
                    //       setChosenPokemonArray([
                    //         ...chosenPokemonArray,
                    //         pokemon.id,
                    //       ]));
                    if (chosenPokemonArray.length >= 6) {
                      if (target.classList.contains('chosen')) {
                        target.classList.remove('chosen');
                        setChosenPokemonArray(
                          chosenPokemonArray.filter((id) => id !== pokemon.id)
                        );
                        setMaximumPokemonMessage(false);
                      } else {
                        setMaximumPokemonMessage(true);
                      }
                    } else {
                      if (target.classList.contains('chosen')) {
                        target.classList.remove('chosen');
                        setChosenPokemonArray(
                          chosenPokemonArray.filter((id) => id !== pokemon.id)
                        );
                      } else {
                        target.classList.add('chosen');
                        setChosenPokemonArray([
                          ...chosenPokemonArray,
                          pokemon.id,
                        ]);
                      }
                    }
                  }
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
