/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CreateTeamModal.scss';
import { IPokemon } from '../../../../@types/types';
import TeamPokemonArticle from '../../Templates/TeamPokemonArticle';
import imageSource from '../../../../assets/img/trainers/trainer(1).jpg';

interface CreateTeamModalProps {
  setArePokemonShown: React.Dispatch<React.SetStateAction<boolean>>;
  chosenPokemon: IPokemon[];
  setAreTrainerAvatarsShown: React.Dispatch<React.SetStateAction<boolean>>;
  isAddPokemonButtonShown: boolean;
  chosenAvatarId: number | undefined;
}
export default function CreateTeamModal({
  chosenPokemon,
  setArePokemonShown,
  isAddPokemonButtonShown,
  setAreTrainerAvatarsShown,
  chosenAvatarId,
}: CreateTeamModalProps) {
  const [avatarSource, setAvatarSource] = useState<string>('');
  useEffect(() => {
    const trainerAvatarSource = `${imageSource.slice(0, 33)}${chosenAvatarId}).jpg`;
    setAvatarSource(trainerAvatarSource);
  }, [avatarSource, chosenAvatarId]);
  console.log(avatarSource);

  return (
    <div className="createTeam-container">
      <div className="createTeam-content">
        <form className="createTeam-form">
          <div className="modal-card-head ">
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
              <div className="avatarChoisi-container">
                <p className="avatarChoisi-paragraph">Avatar choisi</p>
                <div className="avatarChoisi">
                  <figure className="article-image">
                    <img
                      src={avatarSource}
                      alt="trainer"
                      slot="trainer_image"
                      className="trainer-image"
                    />
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
