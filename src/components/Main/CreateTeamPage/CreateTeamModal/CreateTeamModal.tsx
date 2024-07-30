/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import './CreateTeamModal.scss';

interface CreateTeamModalProps {
  setArePokemonShown: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function CreateTeamModal({
  setArePokemonShown,
}: CreateTeamModalProps) {
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
          </div>

          <div className="modal-card-foot">
            <Link
              to="#"
              className="button is-info"
              onClick={() => {
                setArePokemonShown(true);
              }}
            >
              Créer
            </Link>
            <button className="button close" aria-label="close" type="button">
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
