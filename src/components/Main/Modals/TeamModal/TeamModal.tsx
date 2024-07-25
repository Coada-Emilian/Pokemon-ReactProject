import React from 'react';

import { Link } from 'react-router-dom';
import CancelTeamButton from '../../../Buttons/CancelTeamButton';
import DeleteTeamButton from '../../../Buttons/DeleteTeamButton';
import EditTeamButton from '../../../Buttons/EditTeamButton';
import TeamPokemon from './TeamPokemon';

export default function TeamModal() {
  return (
    <div className="modal" id="team-modal">
      <div className="modal-background close" slot="teamModal-background" />
      <div className="modal-card">
        <div className="modal-background has-background-dark" />
        <div className="modal-content">
          <div className="modal-title" id="team-modal-title">
            <p className="title modal_title" slot="modal_title">
              Title
            </p>
            <Link
              to="*"
              className="button edit_team-name"
              slot="teamModal_edit_button"
              id="teamModal-edit-button"
            >
              Éditer le nom
            </Link>
            <button
              className="delete close"
              type="button"
              slot="teamModal_closeButton"
              aria-label="Close modal"
            />
          </div>

          <div className="teamModal-image-description">
            <div className="image">
              <p className="image is-128x128">
                <img src="" alt="" slot="teamModal-image" />
              </p>
            </div>

            <div className="description">
              <p className="modal_description" slot="teamModal-description">
                Description
              </p>
            </div>
          </div>

          <div className="teamModal-pokemon">
            <div className="teamModal-pokemon-title">
              <p className="teamModal-pokemon-paragraph">Pokemon</p>
            </div>

            <div
              className="teamModal-pokemon-figures"
              id="teamModal-pokemon-figures"
              slot="teamModal-pokemon-figures"
            >
              <TeamPokemon />
            </div>
          </div>

          <footer className="card-footer">
            <EditTeamButton />
            <DeleteTeamButton />
            <CancelTeamButton />
          </footer>
        </div>
      </div>
    </div>
  );
}
