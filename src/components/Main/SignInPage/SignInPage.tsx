/* eslint-disable @typescript-eslint/no-unused-expressions */

import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

import signInUser from '../../Api/User/signInUser';
import { IUser } from '../../../@types/types';

import './SignInPage.scss';

interface SignInPageProps {
  setIsUserConnected: React.Dispatch<React.SetStateAction<boolean>>;
  setConnectedUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

export default function SignInPage({
  setIsUserConnected,
  setConnectedUser,
}: SignInPageProps) {
  const [message, setMessage] = useState<string>('');
  const [redirect, setRedirect] = useState(false);
  if (redirect) {
    return <Navigate to="/" replace />;
  }
  return (
    <main className="main">
      <div className="signin-container">
        <h2>Connexion</h2>
        {message && <h3 className="error-message">{message}</h3>}
        <form
          action="#"
          method="POST"
          className="signin-form"
          onSubmit={async (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const email = formData.get('email') as string;
            const password = formData.get('password') as string;
            const user = await signInUser({ email, password });

            user
              ? (setIsUserConnected(true),
                setRedirect(true),
                setConnectedUser(user))
              : setMessage('E-mail ou mot de passe incorrects');
          }}
        >
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
            className="email-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            required
            className="password-input"
          />
          <button type="submit" className="button is-dark">
            Connexion
          </button>
        </form>
      </div>
    </main>
  );
}
