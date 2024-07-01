import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './login.css'; // Make sure to import your CSS

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordValid(value.length >= 8);
    setPasswordMatch(value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setPasswordMatch(password === value);
  };

  return (
    <div className="login" style={{ marginTop: '10px', minHeight: '170vh' }}>
      <form className="login__form">
        <h1 className="login__title">Create An Account</h1>
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
              <input
                type={showPassword ? 'text' : 'password'}
                required
                className={`login__input ${passwordValid ? 'valid' : 'invalid'}`}
                id="login-pass"
                placeholder=" "
                value={password}
                onChange={handlePasswordChange}
              />
              <label htmlFor="login-pass" className="login__label">Password</label>
              <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} login__eye`} id="login-eye" onClick={togglePasswordVisibility}></i>
            </div>
          </div>
          <div className="login__box">
            <i className="bi bi-lock login__icon"></i>
            <div className="login__box-input">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                className="login__input"
                id="login-pass-2"
                placeholder=" "
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <label htmlFor="login-pass-2" className="login__label">Confirm Password</label>
              <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} login__eye`} id="login-eye-2" onClick={togglePasswordVisibility}></i>
            </div>
          </div>
        </div>
        {password && (
          <div className={`password-requirements ${passwordValid ? 'valid' : ''}`}>
            <p className="requirement-text">
              Your password must contain:
            </p>
            <p className={`requirement-item ${passwordValid ? 'valid' : 'invalid'}`}>
              {passwordValid ? <i className="bi bi-check-circle"></i> : <i className="bi bi-x-circle"></i>}
              At least 8 characters
            </p>
          </div>
        )}
        {!passwordMatch && confirmPassword && (
          <div className="password-mismatch">
            <p className="mismatch-text">
              <i className="bi bi-x-circle"></i> Passwords do not match
            </p>
          </div>
        )}
        <div className="login__check">
          <div className="login__check-group">
            <input type="checkbox" className="login__check-input" id="login-check" />
            <label htmlFor="login-check" className="login__check-label">Remember me</label>
          </div>
          <Link to="#" className="login__forgot">Forgot Password?</Link>
        </div>
        <button type="submit" className="login__button" disabled={!passwordValid || !passwordMatch}>Sign Up</button>
        <p className="login__register">
          Already have an account? <Link to="/Login2">LogIn</Link>
        </p>
        <div className="separator">
          <span style={{ fontSize: '1.3rem' }}>OR</span>
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

export default Register;
