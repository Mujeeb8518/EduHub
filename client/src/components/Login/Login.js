import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://us-central1-cmpt474pro.cloudfunctions.net/function-2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        alert('Login successful');
        // Redirect to a dashboard or home page
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred while logging in');
    }
  };

  return (
    <div>
      <h1>User Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required /><br /><br />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br /><br />

        <button type="submit">Login</button>
      </form>

      <div>
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
      <div>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default Login;
