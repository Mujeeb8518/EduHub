import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import './DisplayPost.css';

const DisplayPosts = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchPostsAndSolutions = async () => {
      try {
        const response = await fetch('https://us-central1-cmpt474pro.cloudfunctions.net/function-8', {
          method: 'GET'
        });

        if (!response.ok) {
          console.error('Failed to fetch items');
          return;
        }

        const itemsData = await response.json();
        setItems(itemsData);
      } catch (error) {
        console.error('An error occurred while fetching items:', error);
      }
    };

    fetchPostsAndSolutions();
  }, []);

  const renderItem = (item, index) => {
    if (item.postContent) { 
      return (
        <Card key={index} title={`Question by user ${item.username}`}>
          <p>Question: {item.postContent}</p>
        </Card>
      );
    } else if (item.solutionContent) { 
      return (
        <Card key={index} title={`Solution by user ${item.username}`}>
          <p>Solution: {item.solutionContent}</p>
        </Card>
      );
    }
  };

  return (
    <div className="posts-container">
      <h1>Questions and Solutions</h1>
      {items.map(renderItem)}
    </div>
  );
};

export default DisplayPosts;
