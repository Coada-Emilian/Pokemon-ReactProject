import React from 'react';

import HeaderNavBar from './HeaderNavBar';

import './Header.scss';
import { IUser } from '../../@types/types';

interface HeaderProps {
  setPokemonSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setTeamSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setIsCreateButtonShown: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateButtonShown: boolean;
  isUserConnected: boolean;
  connectedUser: IUser | undefined;
  setIsUserConnected: React.Dispatch<React.SetStateAction<boolean>>;
  setConnectedUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

export default function Header({
  setPokemonSearchValue,
  setTeamSearchValue,
  setIsCreateButtonShown,
  isCreateButtonShown,
  isUserConnected,
  connectedUser,
  setIsUserConnected,
  setConnectedUser,
}: HeaderProps) {
  return (
    <header>
      <HeaderNavBar
        setPokemonSearchValue={setPokemonSearchValue}
        setTeamSearchValue={setTeamSearchValue}
        isCreateButtonShown={isCreateButtonShown}
        setIsCreateButtonShown={setIsCreateButtonShown}
        isUserConnected={isUserConnected}
        connectedUser={connectedUser}
        setIsUserConnected={setIsUserConnected}
        setConnectedUser={setConnectedUser}
      />
    </header>
  );
}
