/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import { Link } from 'react-router-dom';
import CancelTeamButton from '../../../Buttons/CancelTeamButton';
import DeleteTeamButton from '../../../Buttons/DeleteTeamButton';
import EditTeamButton from '../../../Buttons/EditTeamButton';
import TeamPokemon from './TeamPokemon';
import { ITeam } from '../../../../@types/types';
import trainerImage from '../../../../assets/img/trainer-1.jpg';
import avatarImgSource from '../../../../assets/img/trainers/trainer(1).jpg';

import './TeamModal.scss';
import PokemonStats from '../PokemonModal/PokemonStats/PokemonStats';
import PokemonStat from '../PokemonModal/PokemonStats/PokemonStat';

interface TeamModalProps {
  team: ITeam;
  setIsTeamModalOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TeamModal({ team, setIsTeamModalOn }: TeamModalProps) {
  const imageSource = `${trainerImage.slice(0, 24)}${team.id}.jpg`;
  const avatarSource = `${avatarImgSource.slice(0, 33)}${team.avatarSourceId}).jpg`;
  let totalTeamHp = 0;
  let totalTeamAtk = 0;
  let totalTeamDef = 0;
  let totalTeamAtkSpe = 0;
  let totalTeamDefSpe = 0;
  let totalTeamSpeed = 0;
  team.pokemon?.forEach((pokemon) => {
    totalTeamHp += pokemon.hp;
    totalTeamAtk += pokemon.atk;
    totalTeamDef += pokemon.def;
    totalTeamAtkSpe += pokemon.atk_spe;
    totalTeamDefSpe += pokemon.def_spe;
    totalTeamSpeed += pokemon.speed;
  });

  return (
    <div className="modal is-active">
      <div
        className="modal-background close"
        onClick={() => {
          setIsTeamModalOn(false);
        }}
      />
      <div className="modal-card">
        <div className="modal-background has-background-dark" />
        <div className="modal-content teamModal-content">
          <div className="modal-title" id="team-modal-title">
            <Link to="#" className="edit-team-button">
              <p className="title modal_title">{team.name}</p>
            </Link>
            <button
              className="delete close"
              type="button"
              aria-label="Close modal"
              onClick={() => {
                setIsTeamModalOn(false);
              }}
            />
          </div>

          <div className="teamModal-image-description">
            <div className="image">
              <p className="image is-128x128">
                <img
                  src={team.avatarSourceId ? avatarSource : imageSource}
                  alt={team.name}
                />
              </p>
            </div>

            <div className="description">
              <p className="modal_description">{team.description}</p>
            </div>
          </div>

          <div className="teamModal-pokemon">
            <div className="teamModal-pokemon-title">
              <p className="teamModal-pokemon-paragraph">Pokemon</p>
            </div>

            <div
              className="teamModal-pokemon-figures"
              id="teamModal-pokemon-figures"
            >
              {team.pokemon?.map((pokemon) => {
                return (
                  <div className="teamModal-pokemon-article " key={pokemon.id}>
                    <div className="article-image_name">
                      <TeamPokemon pokemon={pokemon} />
                      <p className="article-pokemon_name">{pokemon.name}</p>
                    </div>
                    <div className="article-stats">
                      <PokemonStats pokemon={pokemon} key={pokemon.id} />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="team-stats">
              <p className="teamStats-paragraph">
                Statistiques de l&#39;équipe
              </p>
              <div className="teamStats">
                <PokemonStat stat={totalTeamHp} title="TEAM HP" />
                <PokemonStat stat={totalTeamAtk} title="TEAM ATK" />
                <PokemonStat stat={totalTeamDef} title="TEAM DEF" />
                <PokemonStat stat={totalTeamAtkSpe} title="TEAM ATK_SPE" />
                <PokemonStat stat={totalTeamDefSpe} title="TEAM DEF_SPE" />
                <PokemonStat stat={totalTeamSpeed} title="TEAM SPEED" />
              </div>
            </div>
          </div>

          <footer className="card-footer">
            <EditTeamButton />
            <DeleteTeamButton />
            <CancelTeamButton setIsTeamModalOn={setIsTeamModalOn} />
          </footer>
        </div>
      </div>
    </div>
  );
}
