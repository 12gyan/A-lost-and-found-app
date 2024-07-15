// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { MsalProvider } from '@azure/msal-react';
import { msalInstance } from './Buttons/MicrosoftButton';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <MsalProvider instance={msalInstance}>
        <App />
      </MsalProvider>
    </Router>
  </React.StrictMode>
);
