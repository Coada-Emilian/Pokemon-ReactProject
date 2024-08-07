import React from 'react';

import HeaderNavBarMenuEndItem1 from './HeaderNavBarMenuEndItem1';
import { IUser } from '../../../@types/types';

interface HeaderNavBarMenuEndProps {
  setIsCreateButtonShown: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateButtonShown: boolean;
  isUserConnected: boolean;
  connectedUser: IUser | undefined;
  setIsUserConnected: React.Dispatch<React.SetStateAction<boolean>>;
  setConnectedUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

export default function HeaderNavBarMenuEnd({
  isCreateButtonShown,
  setIsCreateButtonShown,
  isUserConnected,
  connectedUser,
  setIsUserConnected,
  setConnectedUser,
}: HeaderNavBarMenuEndProps) {
  return (
    <div className="navbar-end">
      <HeaderNavBarMenuEndItem1
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
