/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

import CreateTeamButton from '../../Buttons/CreateTeamButton';
import SignInButton from '../../Buttons/SignInButton';
import SignUpButton from '../../Buttons/SignUpButton';
import TeamButton from '../../Buttons/TeamButton';
import { IUser } from '../../../@types/types';

interface HeaderNavBarMenuEndItem1Props {
  setIsCreateButtonShown: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateButtonShown: boolean;
  isUserConnected: boolean;
  connectedUser: IUser | undefined;
  setIsUserConnected: React.Dispatch<React.SetStateAction<boolean>>;
  setConnectedUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

export default function HeaderNavBarMenuEndItem1({
  isCreateButtonShown,
  setIsCreateButtonShown,
  isUserConnected,
  connectedUser,
  setIsUserConnected,
  setConnectedUser,
}: HeaderNavBarMenuEndItem1Props) {
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="navbar-buttons">
      {isCreateButtonShown ? (
        <CreateTeamButton setIsCreateButtonShown={setIsCreateButtonShown} />
      ) : (
        <TeamButton
          setIsCreateButtonShown={setIsCreateButtonShown}
          isUserConnected={isUserConnected}
        />
      )}
      {isUserConnected && connectedUser ? (
        <button
          onClick={() => {
            setIsUserConnected(false);
            setConnectedUser(undefined);
            setRedirect(true);
          }}
          className="button is-danger"
          type="button"
        >
          Welcome {connectedUser.firstName}!
        </button>
      ) : (
        <>
          <SignUpButton />
          <SignInButton />
        </>
      )}
    </div>
  );
}
