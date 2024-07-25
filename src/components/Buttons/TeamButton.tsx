import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamButton() {
  return (
    <Link to="*" className="button is-primary" slot="hamburger-team_btn">
      <strong>Équipes</strong>
    </Link>
  );
}
