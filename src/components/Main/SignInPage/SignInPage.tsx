import React, { useState } from 'react';
import './SignInPage.scss';
import signInUser from '../../Api/User/signInUser';

export default function SignInPage() {
  const [message, setMessage] = useState<string>('');
  return (
    <div className="signin-form">
      <h2>Sign In</h2>
      <form
        action="#"
        method="POST"
        onSubmit={async (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const email = formData.get('email') as string;
          const password = formData.get('password') as string;
          const user = await signInUser({ email, password });
          {
            user
              ? setMessage(`Welcome ${user.firstName} !`)
              : setMessage(`Failed to sign in!`);
          }
        }}
      >
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Sign In</button>
      </form>
      {message && <h2>{message}</h2>}
    </div>
  );
}
