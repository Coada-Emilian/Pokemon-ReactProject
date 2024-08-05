/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { IPokemon } from '../../../../@types/types';

import TeamPokemonArticle from '../../Templates/TeamPokemonArticle';
import imageSource from '../../../../assets/img/trainers/trainer(1).jpg';
import createTeam from '../../../Api/Teams/createTeam';

import './CreateTeamModal.scss';

interface CreateTeamModalProps {
  setArePokemonShown: React.Dispatch<React.SetStateAction<boolean>>;
  chosenPokemon: IPokemon[];
  setAreTrainerAvatarsShown: React.Dispatch<React.SetStateAction<boolean>>;
  isAddPokemonButtonShown: boolean;
  chosenAvatarId: number | undefined;
  arePokemonChosen: boolean;
  setIsTeamCreated: React.Dispatch<React.SetStateAction<boolean>>;
  setCreatedTeamAvatarSourceArray: React.Dispatch<
    React.SetStateAction<string[]>
  >;
  createdTeamAvatarSourceArray: string[];
}

export default function CreateTeamModal({
  chosenPokemon,
  setArePokemonShown,
  isAddPokemonButtonShown,
  setAreTrainerAvatarsShown,
  chosenAvatarId,
  arePokemonChosen,
  setIsTeamCreated,
  setCreatedTeamAvatarSourceArray,
  createdTeamAvatarSourceArray,
}: CreateTeamModalProps) {
  const [avatarSource, setAvatarSource] = useState<string>('');
  const [redirect, setRedirect] = useState<boolean>(false);

  useEffect(() => {
    if (chosenAvatarId !== undefined) {
      const trainerAvatarSource = `${imageSource.slice(0, 33)}${chosenAvatarId}).jpg`;
      setAvatarSource(trainerAvatarSource);

      if (!createdTeamAvatarSourceArray.includes(trainerAvatarSource)) {
        const newAvatarSourceArray = [
          ...createdTeamAvatarSourceArray,
          trainerAvatarSource,
        ];
        setCreatedTeamAvatarSourceArray(newAvatarSourceArray);
      }
    }
  }, [chosenAvatarId]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    await createTeam({ name, description });
    setIsTeamCreated(true);
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/teams" replace />;
  }
  return (
    <div className="createTeam-container">
      <div className="createTeam-content">
        <form className="createTeam-form" onSubmit={handleSubmit}>
          <div className="modal-card-head">
            <p className="modal-card-title">Créer une équipe</p>
          </div>

          <div className="modal-card-body">
            <label htmlFor="createTeam-title" className="label">
              Nom
            </label>
            <input
              id="createTeam-title"
              className="input"
              type="text"
              name="name"
              placeholder="Nom d’équipe"
              required
            />

            <label htmlFor="createTeam-description" className="label">
              Description
            </label>
            <input
              id="createTeam-description"
              className="input"
              type="text"
              name="description"
              placeholder="Description"
              required
            />
            {avatarSource && (
              <div className="chosenAvatar-container">
                <p className="chosenAvatar-paragraph">Avatar choisi</p>
                <div className="chosenAvatar">
                  <figure className="article-image">
                    {!avatarSource.includes('undefined') && (
                      <img
                        src={avatarSource}
                        alt="trainer"
                        slot="trainer_image"
                        className="trainer-image"
                      />
                    )}
                  </figure>
                </div>
              </div>
            )}
            {chosenPokemon.length > 0 && (
              <div className="team-pokemon-container">
                <p className="team-pokemon-paragraph">Pokemon dans l’équipe</p>
                <div className="team-pokemon">
                  {chosenPokemon.map((pokemon) => {
                    return (
                      <TeamPokemonArticle pokemon={pokemon} key={pokemon.id} />
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="modal-card-foot">
            {arePokemonChosen && (
              <button className="button is-info" type="submit">
                Ajouter l'equipe
              </button>
            )}
            {isAddPokemonButtonShown ? (
              <Link
                to="#"
                className="button is-info"
                onClick={() => {
                  setArePokemonShown(true);
                }}
              >
                Ajouter Pokemon
              </Link>
            ) : (
              <Link
                to="#"
                className="button is-info"
                onClick={() => {
                  setAreTrainerAvatarsShown(true);
                }}
              >
                Choisir Avatar
              </Link>
            )}

            <button className="button close" aria-label="close" type="button">
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
