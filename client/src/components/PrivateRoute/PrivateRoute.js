import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ element: Component, isAuthenticated, redirectTo }) => {
  return isAuthenticated ? (
    <Component />
  ) : (
    <Navigate to={redirectTo} replace />
  );
};

export default PrivateRoute;
