import React from 'react';
import { Link } from 'react-router-dom';

export default function CreateTeamButton() {
  return (
    <Link
      to="*"
      className="button is-primary hidden"
      slot="hamburger-create_team_btn"
    >
      <strong>Créer une équipe</strong>
    </Link>
  );
}
