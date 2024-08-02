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
import TrainerAvatarFigure from './TrainerAvatarFigure';

interface CreateTeamPageProps {
  pokemons: IPokemon[];
}

export default function CreateTeamPage({ pokemons }: CreateTeamPageProps) {
  const [arePokemonShown, setArePokemonShown] = useState(false);
  const [chosenPokemonArray, setChosenPokemonArray] = useState<number[]>([]);
  const [chosenPokemon, setChosenPokemon] = useState<IPokemon[]>([]);
  const [maximumPokemonMessage, setMaximumPokemonMessage] =
    useState<boolean>(false);
  const [trainerImageIdArray, setTrainerImageIdArray] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ]);
  const [areTrainerAvatarsShown, setAreTrainerAvatarsShown] =
    useState<boolean>(false);
  const [isAddPokemonButtonShown, setIsAddPokemonButtonShown] =
    useState<boolean>(false);
  const [chosenAvatarId, setChosenAvatarId] = useState<number | undefined>(
    undefined
  );
  const [arePokemonChosen, setArePokemonChosen] = useState<boolean>(false);

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
      setArePokemonChosen(true);
      pokemonArticles.forEach((article) => article.classList.add('maximum'));
    } else {
      pokemonArticles.forEach((article) => article.classList.remove('maximum'));
      setArePokemonChosen(false);
    }
  }, [chosenPokemon]);
  return (
    <div className="createTeam-main">
      <CreateTeamModal
        setArePokemonShown={setArePokemonShown}
        chosenPokemon={chosenPokemon}
        setAreTrainerAvatarsShown={setAreTrainerAvatarsShown}
        isAddPokemonButtonShown={isAddPokemonButtonShown}
        chosenAvatarId={chosenAvatarId}
        arePokemonChosen={arePokemonChosen}
      />

      {areTrainerAvatarsShown && !isAddPokemonButtonShown && (
        <>
          <p className="trainerAvatars-message">Choisissez votre avatar</p>
          <div className="trainerAvatar-container">
            {trainerImageIdArray.map((id) => {
              return (
                <TrainerAvatarFigure
                  id={id}
                  key={id}
                  setIsAddPokemonButtonShown={setIsAddPokemonButtonShown}
                  trainerImageIdArray={trainerImageIdArray}
                  setTrainerImageIdArray={setTrainerImageIdArray}
                  setChosenAvatarId={setChosenAvatarId}
                />
              );
            })}
          </div>
        </>
      )}
      {arePokemonShown && isAddPokemonButtonShown && (
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
