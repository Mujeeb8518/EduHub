import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ element, isAuthenticated, redirectTo }) => {
  return isAuthenticated ? (
    element
  ) : (
    <Navigate to={redirectTo} replace />
  );
};

export default PrivateRoute;
