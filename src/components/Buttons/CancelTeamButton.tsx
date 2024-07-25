import React from 'react';
import { Link } from 'react-router-dom';

export default function CancelTeamButton() {
  return (
    <Link
      to="*"
      type="button"
      className="button is-dark"
      slot="close-team-modal_button"
    >
      Annuler
    </Link>
  );
}
