import React from 'react';
import { Link } from 'react-router-dom';

export default function ReturnToPokedexButton() {
  return (
    <Link to="/" className="button is-light">
      Retourner au Pokédex
    </Link>
  );
}
