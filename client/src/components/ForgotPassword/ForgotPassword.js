import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://us-central1-cmpt474pro.cloudfunctions.net/function-3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email })
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Password: ${data.password}`);
      } else if (response.status === 404) {
        setErrorMessage('User not found');
      } else {
        setErrorMessage('An error occurred');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setErrorMessage('An error occurred while retrieving password');
    }
  };

  return (
    <div className="forgot-password-container"> {/* Apply the CSS class */}
      <h1>Retrieve Password</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required /><br /><br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br /><br />

        <button type="submit">Retrieve Password</button>
      </form>
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
}

export default ForgotPassword;
