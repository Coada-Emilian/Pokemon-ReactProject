import React from 'react';
import { Link } from 'react-router-dom';

export default function SignInButton() {
  return (
    <Link to="*" className="button is-light" slot="hamburger-login_btn">
      Se connecter
    </Link>
  );
}
