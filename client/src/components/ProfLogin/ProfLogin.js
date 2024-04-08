import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ProfLogin.css';

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://us-central1-cmpt474pro.cloudfunctions.net/function-6', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      if (response.ok) {
        setLoggedIn(true);
        alert('Login successful');
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      } else {
        alert(data.message || 'Invalid username or password');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred while logging in');
    }
  };

  return (
    <div className="login-container"> 
      <h1>Faculty Login</h1>
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
