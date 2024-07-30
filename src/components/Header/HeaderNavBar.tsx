import React, { useState } from 'react';

import HeaderNavBarBrand from './HeaderNavBarBrand/HeaderNavBarBrand';
import HeaderNavBarMenu from './HeaderNavBarMenu/HeaderNavBarMenu';
import HeaderNavSearchBar from './HeaderNavSearchBar/HeaderNavSearchBar';

interface HeaderNavBarProps {
  setPokemonSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setTeamSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function HeaderNavBar({
  setPokemonSearchValue,
  setTeamSearchValue,
}: HeaderNavBarProps) {
  const [isCreateButtonShown, setIsCreateButtonShown] = useState(false);
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
      />
    </nav>
  );
}
