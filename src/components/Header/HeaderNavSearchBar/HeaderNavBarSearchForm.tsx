import React from 'react';
import { IPokemon } from '../../../@types/types';

interface HeaderNavBarSearchFormProps {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function HeaderNavBarSearchForm({
  setSearchValue,
}: HeaderNavBarSearchFormProps) {
  return (
    <form action="#" className="search-form" slot="search-form">
      <input
        className="input search-input"
        name="term"
        type="text"
        placeholder="Find a pokemon"
        onChange={(event) => {
          const value = event.currentTarget.value.toLowerCase();
          setSearchValue(value);
        }}
      />
    </form>
  );
}
