/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';

export default function CreateTeamModal() {
  return (
    <div className="modal" id="createTeam-modal">
      <div className="modal-background" slot="createTeam_background" />
      <div className="modal-content" id="createTeam-modal-content">
        <div className="modal-card">
          <form slot="createTeam_modal_form">
            <div className="modal-card-head ">
              <p className="modal-card-title">Créer une équipe</p>
              <button
                className="delete close"
                type="button"
                slot="createTeam_modal_button"
                aria-label="Close modal"
              />
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

              <label htmlFor="add-team-description" className="label">
                Description
              </label>
              <input
                id="add-team-description"
                className="input"
                type="text"
                name="description"
                placeholder="Description"
                required
              />
            </div>

            <div className="modal-card-foot">
              <Link
                to="*"
                className="button is-success"
                slot="createTeam_createButton"
              >
                Créer
              </Link>
              <button
                className="button close"
                aria-label="close"
                type="button"
                slot="createTeam_cancelButton"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
