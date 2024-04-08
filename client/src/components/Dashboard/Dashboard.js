import React from 'react';
import { Link } from 'react-router-dom';
import DisplayPosts from '../Post/DisplayPost';

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to EduHub Forum</h1>
      <div style={{ float: 'right' }}>

        <Link to="/add-post">
          <button>Add Post</button>
        </Link>
      </div>
      <DisplayPosts /> 
    </div>
  );
}

export default Dashboard;
