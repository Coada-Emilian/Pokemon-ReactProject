import React from 'react';

import HeaderNavBar from './HeaderNavBar';

import './Header.scss';

interface HeaderProps {
  setPokemonSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setTeamSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setIsCreateButtonShown: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateButtonShown: boolean;
}

export default function Header({
  setPokemonSearchValue,
  setTeamSearchValue,
  setIsCreateButtonShown,
  isCreateButtonShown,
}: HeaderProps) {
  return (
    <header>
      <HeaderNavBar
        setPokemonSearchValue={setPokemonSearchValue}
        setTeamSearchValue={setTeamSearchValue}
        isCreateButtonShown={isCreateButtonShown}
        setIsCreateButtonShown={setIsCreateButtonShown}
      />
    </header>
  );
}
