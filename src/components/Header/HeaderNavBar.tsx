import React from 'react';

import HeaderNavBarBrand from './HeaderNavBarBrand/HeaderNavBarBrand';
import HeaderNavBarMenu from './HeaderNavBarMenu/HeaderNavBarMenu';
import HeaderNavSearchBar from './HeaderNavSearchBar/HeaderNavSearchBar';
import { IUser } from '../../@types/types';

interface HeaderNavBarProps {
  setPokemonSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setTeamSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setIsCreateButtonShown: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateButtonShown: boolean;
  isUserConnected: boolean;
  connectedUser: IUser | undefined;
  setIsUserConnected: React.Dispatch<React.SetStateAction<boolean>>;
  setConnectedUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

export default function HeaderNavBar({
  setPokemonSearchValue,
  setTeamSearchValue,
  setIsCreateButtonShown,
  isCreateButtonShown,
  isUserConnected,
  connectedUser,
  setIsUserConnected,
  setConnectedUser,
}: HeaderNavBarProps) {
  return (
    <nav
      className="navbar"
      id="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <HeaderNavBarBrand
        isCreateButtonShown={isCreateButtonShown}
        setIsCreateButtonShown={setIsCreateButtonShown}
      />
      <HeaderNavSearchBar
        isCreateButtonShown={isCreateButtonShown}
        setPokemonSearchValue={setPokemonSearchValue}
        setTeamSearchValue={setTeamSearchValue}
      />
      <HeaderNavBarMenu
        isCreateButtonShown={isCreateButtonShown}
        setIsCreateButtonShown={setIsCreateButtonShown}
        isUserConnected={isUserConnected}
        connectedUser={connectedUser}
        setIsUserConnected={setIsUserConnected}
        setConnectedUser={setConnectedUser}
      />
    </nav>
  );
}
