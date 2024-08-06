/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-lonely-if */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { IPokemon } from '../../../@types/types';
import TeamPokemonArticle from '../Templates/TeamPokemonArticle';
import TrainerAvatarFigure from './TrainerAvatarFigure';
import CreateTeamModal from './CreateTeamModal/CreateTeamModal';

import './CreateTeamPage.scss';

interface CreateTeamPageProps {
  pokemons: IPokemon[];
  setIsTeamCreated: React.Dispatch<React.SetStateAction<boolean>>;
  setCreatedTeamAvatarSourceArray: React.Dispatch<
    React.SetStateAction<string[]>
  >;
  createdTeamAvatarSourceArray: string[];
}

export default function CreateTeamPage({
  pokemons,
  setIsTeamCreated,
  setCreatedTeamAvatarSourceArray,
  createdTeamAvatarSourceArray,
}: CreateTeamPageProps) {
  // Are Pokemon Shown
  const [arePokemonShown, setArePokemonShown] = useState(false);
  // Chosen Pokemon Id's Array
  const [chosenPokemonArray, setChosenPokemonArray] = useState<number[]>([]);
  // Chosen Pokemon objects
  const [chosenPokemon, setChosenPokemon] = useState<IPokemon[]>([]);
  // Maximum message
  const [maximumPokemonMessage, setMaximumPokemonMessage] =
    useState<boolean>(false);
  // Trainer Id Array
  const [trainerImageIdArray, setTrainerImageIdArray] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ]);
  // Are the avatars shown
  const [areTrainerAvatarsShown, setAreTrainerAvatarsShown] =
    useState<boolean>(false);
  // Add Pokemon button shown?
  const [isAddPokemonButtonShown, setIsAddPokemonButtonShown] =
    useState<boolean>(false);
  // chosen avatar id
  const [chosenAvatarId, setChosenAvatarId] = useState<number | undefined>(
    undefined
  );
  //are pookemon chosen
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
      {/* //Show modal */}
      <CreateTeamModal
        setArePokemonShown={setArePokemonShown}
        chosenPokemon={chosenPokemon}
        setAreTrainerAvatarsShown={setAreTrainerAvatarsShown}
        isAddPokemonButtonShown={isAddPokemonButtonShown}
        chosenAvatarId={chosenAvatarId}
        arePokemonChosen={arePokemonChosen}
        setIsTeamCreated={setIsTeamCreated}
        setCreatedTeamAvatarSourceArray={setCreatedTeamAvatarSourceArray}
        createdTeamAvatarSourceArray={createdTeamAvatarSourceArray}
      />
      {/* avatar selection */}
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
      {/* pokemon selection */}
      {arePokemonShown && isAddPokemonButtonShown && (
        <>
          <p className="createTeam-message">Choisissez 6 Pokémon</p>
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
