import React from 'react';
import { Link } from 'react-router-dom';

export default function SignInButton() {
  return (
    <Link to="/signIn" type="button" className="button is-light">
      Se connecter
    </Link>
  );
}
