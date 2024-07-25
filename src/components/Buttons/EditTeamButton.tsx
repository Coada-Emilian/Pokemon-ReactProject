import React from 'react';
import { Link } from 'react-router-dom';

export default function EditTeamButton() {
  return (
    <Link to="*" className="button is-light" slot="TeamModal_edit_button">
      Éditer l’équipe
    </Link>
  );
}
