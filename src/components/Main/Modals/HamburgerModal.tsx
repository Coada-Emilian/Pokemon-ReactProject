import React from 'react';

import CreateTeamButton from '../../Buttons/CreateTeamButton';
import SignInButton from '../../Buttons/SignInButton';
import SignUpButton from '../../Buttons/SignUpButton';
import TeamButton from '../../Buttons/TeamButton';

interface HamburgerModalProps {
  setIsCreateButtonShown: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateButtonShown: boolean;
  setIsHamburgerModalShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HamburgerModal({
  setIsHamburgerModalShown,
  isCreateButtonShown,
  setIsCreateButtonShown,
}: HamburgerModalProps) {
  return (
    <div className="modal is-active hamburger-modal">
      <div className="modal-background" />

      <div className="modal-content hamburger_modal_content">
        <div className="buttons">
          {isCreateButtonShown && (
            <CreateTeamButton setIsCreateButtonShown={setIsCreateButtonShown} />
          )}
          <TeamButton setIsCreateButtonShown={setIsCreateButtonShown} />
          <SignUpButton />
          <SignInButton />
        </div>
      </div>
      <button
        type="button"
        className="modal-close is-large"
        slot="modal_close_button"
        aria-label="close"
        onClick={() => {
          setIsHamburgerModalShown(false);
        }}
      />
    </div>
  );
}
