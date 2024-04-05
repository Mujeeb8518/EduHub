import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

import './Navbar.css'

const Navbar = ({ isLoggedIn, handleSignOut }) => {
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      url: '/',
    },
  ];

  const endItems = isLoggedIn ? (
    <Button label="Sign Out" icon="pi pi-sign-out" className="p-button-secondary" onClick={handleSignOut} />
  ) : (
    <Link to="/login" style={{ textDecoration: 'none' }}>
      <Button label="Login" icon="pi pi-sign-in" className="p-button-secondary" />
    </Link>
  );

  return (
    <div className="navbar">
      <Menubar model={items} end={endItems} style={{ color: 'var(--primary-color)' }} />
    </div>
  );
};

export default Navbar;
