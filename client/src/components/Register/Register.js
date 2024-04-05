import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

// import InputText from "components/PrimeReact/InputText";

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://us-central1-cmpt474pro.cloudfunctions.net/function-1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('User registered successfully');
        // Redirect to a success page or do something else
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred while registering the user');
    }
  };

  return (
    <div>
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        /><br/><br/>
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br/><br/>
        
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        /><br/><br/>
        
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
export default Register;