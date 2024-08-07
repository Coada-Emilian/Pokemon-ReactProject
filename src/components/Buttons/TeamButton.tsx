/* eslint-disable @typescript-eslint/no-unused-expressions */

import React from 'react';
import { NavLink } from 'react-router-dom';

interface TeamButtonProps {
  setIsCreateButtonShown: React.Dispatch<React.SetStateAction<boolean>>;
  isUserConnected: boolean;
}

export default function TeamButton({
  setIsCreateButtonShown,
  isUserConnected,
}: TeamButtonProps) {
  return (
    <NavLink
      to="/teams"
      className="button is-info"
      onClick={() => {
        isUserConnected && setIsCreateButtonShown(true);
      }}
    >
      <strong>Équipes</strong>
    </NavLink>
  );
}
