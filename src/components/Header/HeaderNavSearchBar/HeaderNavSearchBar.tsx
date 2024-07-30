import React from 'react';

import HeaderNavBarSearchForm from './HeaderNavBarSearchForm';
import { IPokemon } from '../../../@types/types';

interface HeaderNavSearchBarProps {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function HeaderNavSearchBar({
  setSearchValue,
}: HeaderNavSearchBarProps) {
  return (
    <div className="search-bar">
      <HeaderNavBarSearchForm setSearchValue={setSearchValue} />
    </div>
  );
}
