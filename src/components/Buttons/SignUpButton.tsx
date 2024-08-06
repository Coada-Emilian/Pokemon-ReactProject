import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUpButton() {
  return (
    <Link to="/signUp" type="button" className="button is-dark">
      <strong>Enregistrement</strong>
    </Link>
  );
}
