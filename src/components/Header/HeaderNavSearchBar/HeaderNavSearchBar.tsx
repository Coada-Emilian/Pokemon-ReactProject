import React from 'react';

import HeaderNavBarSearchForm from './HeaderNavBarSearchForm';

interface HeaderNavSearchBarProps {
  setPokemonSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setTeamSearchValue: React.Dispatch<React.SetStateAction<string>>;
  isCreateButtonShown: boolean;
}

export default function HeaderNavSearchBar({
  setPokemonSearchValue,
  setTeamSearchValue,
  isCreateButtonShown,
}: HeaderNavSearchBarProps) {
  return (
    <div className="search-bar">
      <HeaderNavBarSearchForm
        isCreateButtonShown={isCreateButtonShown}
        setPokemonSearchValue={setPokemonSearchValue}
        setTeamSearchValue={setTeamSearchValue}
      />
    </div>
  );
}
