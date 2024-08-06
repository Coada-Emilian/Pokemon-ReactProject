/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import { Link } from 'react-router-dom';

import { IPokemon } from '../../../../@types/types';
import PokemonEvolutions from './PokemonEvolutions/PokemonEvolutions';
import PokemonStats from './PokemonStats/PokemonStats';
import PokemonTypes from './PokemonTypes/PokemonTypes';

import './PokemonModal.scss';

interface PokemonModalProps {
  pokemon: IPokemon;
  setIsModalOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PokemonModal({
  pokemon,
  setIsModalOn,
}: PokemonModalProps) {
  const altText = `${pokemon.name} image`;
  return (
    <div className="modal is-active pokemon-modal" id="pokemon-modal">
      <div
        className="modal-background close"
        slot="pokemonModal_background"
        onClick={() => {
          setIsModalOn(false);
        }}
        aria-label="Close modal"
      />
      <div className="modal-card">
        <div className="modal-background has-background-dark" />
        <div className="modal-content">
          <div className="modal-title">
            <p className="title modal-subtitle" slot="modal_title">
              {pokemon.name}
            </p>
            <button
              className="delete close"
              type="button"
              slot="editTeamName_modal_button"
              onClick={() => {
                setIsModalOn(false);
              }}
              aria-label="Close modal"
            />
          </div>

          <div className="pokemonModal-description">
            <div className="image pokemonModal-img">
              <p className="image-container">
                <img
                  src={pokemon.gif}
                  alt={altText}
                  slot="pokemonModal_image"
                  className="pokemonModal-image"
                />
              </p>
            </div>

            <div className="modal-description">
              <p className="modal_description" slot="pokemonModal_description">
                {pokemon.description}
              </p>
            </div>
          </div>

          <div className="pokemonModal-stats-types">
            <PokemonStats pokemon={pokemon} />
            <PokemonTypes types={pokemon.types} setIsModalOn={setIsModalOn} />
          </div>

          <PokemonEvolutions pokemon={pokemon} />

          <footer className="pokemonModal-footer">
            <Link
              to={`/compare/${pokemon.id}`}
              className="button is-light"
              slot="pokemonModal_compare_button"
            >
              Comparer
            </Link>
            {/* <button
              type="button"
              className="button is-info pokemonModal-addButton"
              slot="pokemonModal_addButton"
            >
              Ajouter à l'équipe
            </button>
            <button
              type="button"
              className="button is-danger pokemonModal-removeButton"
              slot="pokemonModal_removeButton"
            >
              Retirer de l'équipe
            </button> */}
          </footer>
        </div>
      </div>
    </div>
  );
}
