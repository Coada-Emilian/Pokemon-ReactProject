/* eslint-disable @typescript-eslint/no-unused-expressions */

import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import signUpUser from '../../Api/User/signUpUser';
import getAllUsers from '../../Api/User/getAllUsers';
import { IUser } from '../../../@types/types';

import './SignUpPage.scss';

interface SignUpPageProps {
  setIsUserConnected: React.Dispatch<React.SetStateAction<boolean>>;
  setConnectedUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

export default function SignUpPage({
  setIsUserConnected,
  setConnectedUser,
}: SignUpPageProps) {
  const [usersData, setUsersData] = useState<IUser[]>([]);
  const [message, setMessage] = useState<string>('');
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    const getUsers = async () => {
      const users = await getAllUsers();
      setUsersData(users);
    };
    getUsers();
  }, []);
  if (redirect) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="main">
      <div className="signup-container">
        <h2>Enregistrement</h2>
        {message && <h3 className="error-message">{message}</h3>}
        <form
          action="#"
          method="POST"
          className="signup-form"
          onSubmit={async (event) => {
            event.preventDefault();

            const formData = new FormData(event.currentTarget);
            const firstName = formData.get('firstName') as string;
            const lastName = formData.get('lastName') as string;
            const email = formData.get('email') as string;
            const password = formData.get('password') as string;
            if (usersData.some((user) => user.email === email)) {
              setMessage('E-mail déjà existant dans notre base de données.');
            } else {
              const user = await signUpUser({
                firstName,
                lastName,
                email,
                password,
              });

              user &&
                (setIsUserConnected(true),
                setRedirect(true),
                setConnectedUser(user));
            }
          }}
        >
          <input type="text" name="firstName" placeholder="Prenom" required />
          <input type="text" name="lastName" placeholder="Nom" required />
          <input type="email" name="email" placeholder="E-mail" required />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            required
          />
          <button type="submit" className="button is-dark">
            Enregistrement
          </button>
        </form>
      </div>
    </main>
  );
}
