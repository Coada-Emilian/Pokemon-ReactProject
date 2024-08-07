import React from 'react';

import HeaderNavBarMenuEnd from './HeaderNavBarMenuEnd';
import { IUser } from '../../../@types/types';

interface HeaderNavBarMenuProps {
  isCreateButtonShown: boolean;
  setIsCreateButtonShown: React.Dispatch<React.SetStateAction<boolean>>;
  isUserConnected: boolean;
  connectedUser: IUser | undefined;
  setIsUserConnected: React.Dispatch<React.SetStateAction<boolean>>;
  setConnectedUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

export default function HeaderNavBarMenu({
  setIsCreateButtonShown,
  isCreateButtonShown,
  isUserConnected,
  connectedUser,
  setIsUserConnected,
  setConnectedUser,
}: HeaderNavBarMenuProps) {
  return (
    <div className="navbar-menu">
      <HeaderNavBarMenuEnd
        isCreateButtonShown={isCreateButtonShown}
        setIsCreateButtonShown={setIsCreateButtonShown}
        isUserConnected={isUserConnected}
        connectedUser={connectedUser}
        setIsUserConnected={setIsUserConnected}
        setConnectedUser={setConnectedUser}
      />
    </div>
  );
}
