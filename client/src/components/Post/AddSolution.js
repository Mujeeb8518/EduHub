import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import './AddPost.css';

const AddPost = () => {
  const [solutionContent, setSolutionContent] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem('token');

    if (!token) {
      alert('You are not logged in.');
      return;
    }

    try {
      const response = await fetch('https://us-central1-cmpt474pro.cloudfunctions.net/function-7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ solutionContent })
      });

      if (response.ok) {
        alert('solution added successfully');
        setSolutionContent('');
      } else {
        alert('Failed to add solution. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred while adding the solution.');
    }
  };

  return (
    <div className="login-container">
      <h1>Add a New Solution</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="solutionContent">Solution Content:</label><br />
        <InputTextarea id="solutionContent" value={solutionContent} onChange={(e) => setSolutionContent(e.target.value)} required rows={4} cols={50}></InputTextarea><br /><br />

        <Button type="submit" label="Submit Solution" className="login-button" /> {/* Apply similar button style */}
      </form>
    </div>
  );
};

export default AddPost;
