import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddPost from './components/Post/AddPost';
import DisplayPosts from './components/Post/DisplayPost';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      setLoggedIn(true);
    }
  }, []);

  const handleSignIn = () => {
    setLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleSignOut = () => {
    setLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <div className="App">
      <Router>
        <Navbar isLoggedIn={loggedIn} handleSignOut={handleSignOut} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login setLoggedIn={handleSignIn} />}
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute element={Dashboard} 
            isAuthenticated={loggedIn}/>}
            />
          <Route 
            path="/add-post"
            element={<PrivateRoute element={AddPost}
            isAuthenticated={loggedIn}/>}
          />
          <Route path="/questions" element={<DisplayPosts/>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
