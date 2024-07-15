import React from 'react';
import { useMsal } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';

const msalConfig = {
  auth: {
    clientId: '035b2e5d-acde-4404-b60c-f742c8ec8549',
    redirectUri: 'http://localhost:3000/auth/microsoft/callback',
    authority: 'https://login.microsoftonline.com/organizations'
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

const MicrosoftLoginButton = ({ setIsAuthenticated }) => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginPopup({
      scopes: ['User.Read']
    }).then(response => {
      const emailDomain = response.account.username.split('@')[1];
      if (emailDomain === 'knust.edu.gh') {
        console.log('Login successful');
        setIsAuthenticated(true);
      } else {
        console.error('Invalid email domain');
      }
    }).catch(error => {
      console.error(error);
    });
  };

  return (
    <button onClick={handleLogin} className="login__button login__button--microsoft">
      <i className="bi bi-microsoft"></i> Continue with School email
    </button>
  );
};

export { msalInstance, MicrosoftLoginButton };
