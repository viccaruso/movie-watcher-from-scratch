import React, { useState } from 'react';
import { signInUser, signupUser } from './services/supabase-utils';

export default function AuthPage({ setUserSession }) {
  const [formEmail, setFormEmail] = useState('');
  const [formPass, setFormPass] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();
    setUserSession(await signInUser(formEmail, formPass));
    setFormEmail('');
    setFormPass('');
  }

  async function handleSignUp() {
    setUserSession(await signupUser(formEmail, formPass));
    setFormEmail('');
    setFormPass('');
  }

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <label> Email 
          <input required type='text' value={formEmail} onChange={e => setFormEmail(e.target.value)}/>
        </label>
        <label> Password
          <input required type='password' value={formPass} onChange={e => setFormPass(e.target.value)}/>
        </label>
        <button type='submit'>Sign In</button>
        <button type='button' onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
}
