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
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value.toLowerCase();
    if (isCreateButtonShown) {
      setTeamSearchValue(value);
    } else {
      setPokemonSearchValue(value);
    }
  };
  return (
    <form action="#" className="search-form" slot="search-form">
      <input
        className="input search-input"
        name="term"
        type="text"
        placeholder={isCreateButtonShown ? 'Find a team' : 'Find a pokemon'}
        onChange={handleInputChange}
        aria-label={
          isCreateButtonShown ? 'Search for a team' : 'Search for a Pokémon'
        }
      />
    </form>
  );
}
