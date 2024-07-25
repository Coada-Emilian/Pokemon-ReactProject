/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { Link } from 'react-router-dom';

export default function EditTeamNameModal() {
  return (
    <div className="modal" id="editTeamName-modal">
      <div className="modal-background" slot="editTeamName_background" />
      <div className="modal-content" id="editTeamName-modal-content">
        <div className="modal-card">
          <form slot="editTeamName_modal_form">
            <div className="modal-card-head ">
              <p className="modal-card-title">Renommer l'équipe</p>
              <button
                className="delete close"
                type="button"
                slot="editTeamName_modal_button"
                aria-label="Close modal"
              />
            </div>

            <div className="modal-card-body">
              <label htmlFor="editTeamName-title" className="label">
                Nouveau nom
              </label>
              <input
                id="editTeamName-title"
                className="input"
                type="text"
                name="name"
                slot="editTeamName-input"
                placeholder="Nom d’équipe"
                required
              />
            </div>

            <div className="modal-card-foot">
              <Link
                to="*"
                className="button is-success"
                slot="editTeamName_createButton"
              >
                Modifier
              </Link>
              <button
                className="button close"
                aria-label="close"
                type="button"
                slot="editTeamName_cancelButton"
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
