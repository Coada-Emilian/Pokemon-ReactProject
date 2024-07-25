import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUpButton() {
  return (
    <Link to="*" className="button is-dark" slot="hamburger-register_btn">
      <strong>Enregistrement</strong>
    </Link>
  );
}
