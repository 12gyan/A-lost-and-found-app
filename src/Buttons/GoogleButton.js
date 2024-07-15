// src/Buttons/GoogleButton.js
import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import '../Login-Page/login.css';

const GoogleButton = ({ onSuccess, onFailure }) => {
  const clientId = '582891879798-uv7rtmdarqoq2kt3qe89murbtfcbhg4o.apps.googleusercontent.com';

  const handleLoginSuccess = (credentialResponse) => {
    const token = credentialResponse.credential;
    const decoded = jwtDecode(token); // Decode the token
    console.log('Google login successful:', decoded);
    onSuccess(decoded);
  };

  const handleLoginFailure = () => {
    console.error('Google login failed');
    onFailure('Login Failed');
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
        useOneTap
       
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="login__button login__button--google"
          >
            <i className="bi bi-google"></i> Sign In With Google 
          </button>
        )}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleButton;
