import React, { useState } from 'react';

import HeaderNavBarBrand from './HeaderNavBarBrand/HeaderNavBarBrand';
import HeaderNavBarMenu from './HeaderNavBarMenu/HeaderNavBarMenu';
import HeaderNavSearchBar from './HeaderNavSearchBar/HeaderNavSearchBar';
import { IPokemon } from '../../@types/types';

interface HeaderNavBarProps {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function HeaderNavBar({ setSearchValue }: HeaderNavBarProps) {
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
      <HeaderNavSearchBar setSearchValue={setSearchValue} />
      <HeaderNavBarMenu
        isCreateButtonShown={isCreateButtonShown}
        setIsCreateButtonShown={setIsCreateButtonShown}
      />
    </nav>
  );
}
