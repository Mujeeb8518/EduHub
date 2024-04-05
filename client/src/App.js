import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleSignOut = () => {
    setLoggedIn(false);
  }

  return (
    <div className="App">
      <Router>
        <Navbar isLoggedIn={loggedIn} handleSignOut={handleSignOut} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute
                element={<Dashboard />}
                isAuthenticated={loggedIn}
                redirectTo="/login"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
