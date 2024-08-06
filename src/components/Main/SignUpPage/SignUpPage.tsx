import React, { useEffect, useState } from 'react';
import './SignUpPage.scss';
import signUpUser from '../../Api/User/signUpUser';
import getAllUsers from '../../Api/User/getAllUsers';
import { IUser } from '../../../@types/types';

export default function SignUpPage() {
  const [usersData, setUsersData] = useState<IUser[]>([]);
  const [message, setMessage] = useState<string>('');
  useEffect(() => {
    const getUsers = async () => {
      const users = await getAllUsers();
      setUsersData(users);
    };
    getUsers();
  }, []);

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form
        action="#"
        method="POST"
        onSubmit={async (event) => {
          event.preventDefault();

          const formData = new FormData(event.currentTarget);
          const firstName = formData.get('firstName') as string;
          const lastName = formData.get('lastName') as string;
          const email = formData.get('email') as string;
          const password = formData.get('password') as string;
          if (usersData.some((user) => user.email === email)) {
            setMessage('User with this email already exists.');
          } else {
            const user = await signUpUser({
              firstName,
              lastName,
              email,
              password,
            });
            setMessage(`Welcome ${user?.firstName} !`);
          }
        }}
      >
        <input type="text" name="firstName" placeholder="First Name" required />
        <input type="text" name="lastName" placeholder="Last Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      {message && <h2>{message}</h2>}
    </div>
  );
}
