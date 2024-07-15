import React from 'react';
import { Navigate } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';
import { useGoogleOAuth } from '@react-oauth/google';

const ProtectedRoute = ({ children }) => {
  const { accounts } = useMsal(),useGoogleOAuth();

  // Check if the user is authenticated
  const isAuthenticated = accounts.length > 0;

  if (!isAuthenticated) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If authenticated, render the protected component
  return children;
};

export default ProtectedRoute;
