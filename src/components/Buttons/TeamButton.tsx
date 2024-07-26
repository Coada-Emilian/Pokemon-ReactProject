import React from 'react';
import { NavLink } from 'react-router-dom';

interface TeamButtonProps {
  setIsCreateButtonShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TeamButton({
  setIsCreateButtonShown,
}: TeamButtonProps) {
  return (
    <NavLink
      to="/teams"
      className="button is-info"
      slot="hamburger-team_btn"
      onClick={() => {
        setIsCreateButtonShown(true);
      }}
    >
      <strong>Équipes</strong>
    </NavLink>
  );
}
