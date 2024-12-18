import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ requiredRole }) => {
  const { isLoggedIn, userData } = useSelector((state) => state.user);
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  if (requiredRole !== userData.role) {
    return <Navigate to="/unauthorized" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
