import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './login.css'; // Make sure to import your CSS

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login" style={{marginTop:'100px',minHeight:'140vh'}}>
      {/* <img src="assets/img/login-bg.png" alt="login image" className="login__img" /> */}
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
          <span style={{fontSize:'1.3rem'}}>OR</span>
        </div>
        <button type="button" className="login__button login__button--google">
          <i className="bi bi-google"></i> Continue with Google
        </button>
        <button type="button" className="login__button login__button--microsoft">
          <i className="bi bi-microsoft"></i> Continue with Microsoft Outlook
        </button>
      </form>
    </div>
  );
};

export default Login;
