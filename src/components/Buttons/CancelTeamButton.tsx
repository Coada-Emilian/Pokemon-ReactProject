import React from 'react';

interface CancelTeamButtonProps {
  setIsTeamModalOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CancelTeamButton({
  setIsTeamModalOn,
}: CancelTeamButtonProps) {
  return (
    <button
      type="button"
      className="button is-dark"
      onClick={() => {
        setIsTeamModalOn(false);
      }}
    >
      Annuler
    </button>
  );
}
