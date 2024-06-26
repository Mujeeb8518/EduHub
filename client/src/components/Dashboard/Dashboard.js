import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import DisplayPosts from '../Post/DisplayPost';
import './Dashboard.css'; 

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to EduHub Forum</h1>
      <div className="add-post-button-container">
        <Link to="/add-post">
          <Button label="Ask Question" className="add-post-button" /> 
        </Link>
      </div>
      <div className="add-post-button-container">
        <Link to="/add-solution">
          <Button label="Enter Solution" className="add-post-button" /> 
        </Link>
      </div>
      <DisplayPosts /> 
    </div>
  );
}

export default Dashboard;
