import React from 'react';
import './SignUpPage.scss';

export default function SignUpPage() {
  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form action="/signup" method="post">
        <input type="text" name="firstname" placeholder="First Name" required />
        <input type="text" name="lastname" placeholder="Last Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
