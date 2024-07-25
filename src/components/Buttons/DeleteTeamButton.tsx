import React from 'react';
import { Link } from 'react-router-dom';

export default function DeleteTeamButton() {
  return (
    <Link to="*" className="button is-danger" slot="delete-team-modal_button">
      Éliminer l’équipe
    </Link>
  );
}
