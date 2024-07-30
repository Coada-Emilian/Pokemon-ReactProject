import React from 'react';
import { Link } from 'react-router-dom';

interface CreateTeamButtonProps {
  setIsCreateButtonShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CreateTeamButton({
  setIsCreateButtonShown,
}: CreateTeamButtonProps) {
  return (
    <Link
      to="/create/team"
      className="button is-info"
      slot="hamburger-create_team_btn"
      onClick={() => {
        setIsCreateButtonShown(false);
      }}
    >
      <strong>Créer une équipe</strong>
    </Link>
  );
}
