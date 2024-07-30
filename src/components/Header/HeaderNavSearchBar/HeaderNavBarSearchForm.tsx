/* eslint-disable no-lone-blocks */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';

interface HeaderNavBarSearchFormProps {
  setPokemonSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setTeamSearchValue: React.Dispatch<React.SetStateAction<string>>;
  isCreateButtonShown: boolean;
}

export default function HeaderNavBarSearchForm({
  isCreateButtonShown,
  setPokemonSearchValue,
  setTeamSearchValue,
}: HeaderNavBarSearchFormProps) {
  return (
    <form action="#" className="search-form" slot="search-form">
      <input
        className="input search-input"
        name="term"
        type="text"
        placeholder={isCreateButtonShown ? 'Find a team' : 'Find a pokemon'}
        onChange={(event) => {
          const value = event.currentTarget.value.toLowerCase();
          {
            isCreateButtonShown
              ? setTeamSearchValue(value)
              : setPokemonSearchValue(value);
          }
        }}
      />
    </form>
  );
}
