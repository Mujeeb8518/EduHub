import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import './AddPost.css';

const AddPost = () => {
  const [postContent, setPostContent] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem('token');

    if (!token) {
      alert('You are not logged in.');
      return;
    }

    try {
      const response = await fetch('https://us-central1-cmpt474pro.cloudfunctions.net/function-4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ postContent })
      });

      if (response.ok) {
        alert('Post added successfully');
        setPostContent('');
      } else {
        alert('Failed to add post. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred while adding the post.');
    }
  };

  return (
    <div className="login-container">
      <h1>Add a New Post</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="postContent">Post Content:</label><br />
        <InputTextarea id="postContent" value={postContent} onChange={(e) => setPostContent(e.target.value)} required rows={4} cols={50}></InputTextarea><br /><br />

        <Button type="submit" label="Submit Post" className="login-button" /> {/* Apply similar button style */}
      </form>
    </div>
  );
};

export default AddPost;
