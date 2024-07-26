/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../../assets/icons/pokedex.png';

interface HeaderNavBarBrandIconProps {
  setIsCreateButtonShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HeaderNavBarBrandIcon({
  setIsCreateButtonShown,
}: HeaderNavBarBrandIconProps) {
  return (
    <Link
      className="navbar-item"
      to="/"
      slot="navBar_pokedex_anchor"
      id="navbar-pokedex"
      onClick={() => {
        setIsCreateButtonShown(false);
      }}
    >
      <img src={icon} alt="pokedex icon" className="pokedex-icon" />

      <h1 className="title icon-title">O'Pokedex</h1>
    </Link>
  );
}
