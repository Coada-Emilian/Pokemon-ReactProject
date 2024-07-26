import React from 'react';

import CreateTeamButton from '../../Buttons/CreateTeamButton';
import SignInButton from '../../Buttons/SignInButton';
import SignUpButton from '../../Buttons/SignUpButton';
import TeamButton from '../../Buttons/TeamButton';

interface HeaderNavBarMenuEndItem1Props {
  setIsCreateButtonShown: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateButtonShown: boolean;
}

export default function HeaderNavBarMenuEndItem1({
  isCreateButtonShown,
  setIsCreateButtonShown,
}: HeaderNavBarMenuEndItem1Props) {
  console.log(isCreateButtonShown);
  return (
    <div className="navbar-buttons">
      {isCreateButtonShown && (
        <CreateTeamButton setIsCreateButtonShown={setIsCreateButtonShown} />
      )}
      <TeamButton setIsCreateButtonShown={setIsCreateButtonShown} />
      <SignUpButton />
      <SignInButton />
    </div>
  );
}
