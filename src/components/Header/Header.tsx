import React from 'react';

import HeaderNavBar from './HeaderNavBar';

import './Header.scss';

interface HeaderProps {
  setPokemonSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setTeamSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header({
  setPokemonSearchValue,
  setTeamSearchValue,
}: HeaderProps) {
  return (
    <header>
      <HeaderNavBar
        setPokemonSearchValue={setPokemonSearchValue}
        setTeamSearchValue={setTeamSearchValue}
      />
    </header>
  );
}
