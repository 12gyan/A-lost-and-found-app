// src/Login-Page/Login-2.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './login.css';
import { MsalProvider } from '@azure/msal-react';
import { msalInstance, MicrosoftLoginButton } from '../Buttons/MicrosoftButton';

const Login2 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/Home');
    }
  }, [isAuthenticated, navigate]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <MsalProvider instance={msalInstance}>
      <div className="login" style={{ marginTop: '100px', minHeight: '140vh' }}>
        <form className="login__form">
          <h1 className="login__title">Login</h1>
          <div className="login__content">
            <div className="login__box">
              <i className="bi bi-person login__icon"></i>
              <div className="login__box-input">
                <input type="email" required className="login__input" id="login-email" placeholder=" " />
                <label htmlFor="login-email" className="login__label">Email</label>
              </div>
            </div>
            <div className="login__box">
              <i className="bi bi-lock login__icon"></i>
              <div className="login__box-input">
                <input type={showPassword ? "text" : "password"} required className="login__input" id="login-pass" placeholder=" " />
                <label htmlFor="login-pass" className="login__label">Password</label>
                <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} login__eye`} id="login-eye" onClick={togglePasswordVisibility}></i>
              </div>
            </div>
          </div>
          <div className="login__check">
            <div className="login__check-group">
              <input type="checkbox" className="login__check-input" id="login-check" />
              <label htmlFor="login-check" className="login__check-label">Remember me</label>
            </div>
            <Link to="#" className="login__forgot">Forgot Password?</Link>
          </div>
          <button type="submit" className="login__button">Login</button>
          <p className="login__register">
            Don't have an account? <Link to="/Register">Register</Link>
          </p>
          <div className="separator">
            <span style={{ fontSize: '1.3rem' }}>OR</span>
          </div>
        
          <MicrosoftLoginButton setIsAuthenticated={setIsAuthenticated} />
        </form>
      </div>
    </MsalProvider>
  );
};

export default Login2;
