import React from 'react';

import HeaderNavBar from './HeaderNavBar';

import './Header.scss';
import { IPokemon } from '../../@types/types';

interface HeaderProps {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header({ setSearchValue }: HeaderProps) {
  return (
    <header>
      <HeaderNavBar setSearchValue={setSearchValue} />
    </header>
  );
}
