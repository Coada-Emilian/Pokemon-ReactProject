import React from 'react';
import './SignInPage.scss';

export default function SignInPage() {
  return (
    <div className="signin-form">
      <h2>Sign In</h2>
      <form action="/signin" method="post">
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
