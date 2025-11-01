import React, { useState } from 'react';
import { login } from '../auth';
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await login(email, password);
      console.log('Logged in', user);
      if(user){
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <form onSubmit={submit}>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
      {error && <div style={{color: 'red'}}>{error}</div>}
    </form>
  );
}
