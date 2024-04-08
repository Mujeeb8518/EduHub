import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import './DisplayPost.css';

const DisplayPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://us-central1-cmpt474pro.cloudfunctions.net/function-5', {
          method: 'GET'
        });

        if (!response.ok) {
          console.error('Failed to fetch posts');
          return;
        }

        const postsData = await response.json();
        setPosts(postsData);
      } catch (error) {
        console.error('An error occurred while fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="posts-container">
      <h1>Questions</h1>
      {posts.map((post, index) => (
        <Card key={index} title={`Written by ${post.username}`}>
          <p>Question: {post.postContent}</p>
        </Card>
      ))}
    </div>
  );
};

export default DisplayPosts;
