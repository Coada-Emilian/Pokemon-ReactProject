import React from 'react';

export default function HeaderNavBarSearchForm() {
  return (
    <form action="#" className="search-form" slot="search-form">
      <input
        className="input search-input"
        name="term"
        type="text"
        placeholder="Find a pokemon"
        slot="search-input"
      />

      <button type="submit" className="button is-info find-button">
        Find Pokemon
      </button>
    </form>
  );
}
