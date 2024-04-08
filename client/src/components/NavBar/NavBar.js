import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Link, useNavigate } from 'react-router-dom';

import './Navbar.css';

const Navbar = ({ isLoggedIn, handleSignOut }) => {
  const navigate = useNavigate();

  const homeUrl = isLoggedIn ? '/dashboard' : '/';

  const items = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      url: homeUrl,
    },
  ];

  if (!isLoggedIn) {
    items.push({
      label: 'Questions',
      icon: 'pi pi-fw pi-list',
      url: '/questions',
      className: 'questions-button',
    });
  }

  const handleSignOutClick = () => {
    alert('You have signed out');
    navigate('/');
    handleSignOut();
  };

  const endItems = isLoggedIn ? (
    <div className="end-items">
      <Button label="Sign Out" icon="pi pi-sign-out" className="p-button-secondary" onClick={handleSignOutClick} />
    </div>
  ) : (
    <div className="end-items">
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <Button label="Login" icon="pi pi-sign-in" className="p-button-secondary" />
      </Link>
    </div>
  );

  return (
    <div className="navbar">
      <Menubar model={items} end={endItems} style={{ color: 'var(--primary-color)' }} />
    </div>
  );
};

export default Navbar;
