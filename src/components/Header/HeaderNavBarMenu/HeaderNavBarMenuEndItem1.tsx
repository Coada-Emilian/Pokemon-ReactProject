import React, { useState } from 'react';

import CreateTeamButton from '../../Buttons/CreateTeamButton';
import SignInButton from '../../Buttons/SignInButton';
import SignUpButton from '../../Buttons/SignUpButton';
import TeamButton from '../../Buttons/TeamButton';

export default function HeaderNavBarMenuEndItem1() {
  const [isCreateButtonShown, setIsCreateButtonShown] = useState(false);
  return (
    <div className="navbar-buttons">
      {isCreateButtonShown && <CreateTeamButton />}
      <TeamButton setIsCreateButtonShown={setIsCreateButtonShown} />
      <SignUpButton />
      <SignInButton />
    </div>
  );
}
