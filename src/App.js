// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate,Link } from 'react-router-dom';
import './App.css';
import Header from './Header/header';
import Footer from './Footer/footer';
import Home from './Home/home';
import About from './About/About';
import FAQ from './FAQ/faq';
import Feedback from './Feedback/feedback';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Profile from './Profile/profile';
import Team from './Team/Team';
import Found from './Found/Found';
import Lost from './Lost/Lost';
import Login from './Login-Page/Login';
import Login2 from './Login-Page/Login-2';
import Register from './Login-Page/Register';
import GoToTop from './Go-To-Top/Go-To-Top';
import {useMsal, MsalProvider } from '@azure/msal-react';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  return (
      <div className="App">
        <Header className="header" />
        <Routes className="section">
          <Route path="/" element={<Login />} />
          <Route path="/Login2" element={<Login2 />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Found" element={<Found />} />
          <Route path="/Lost" element={<Lost />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/signout" element={<SignOut />} />
        </Routes>
        <GoToTop />
        <Footer className="footer" />
      </div>
  );
};

const SignOut = () => {
  const { instance } = useMsal();

  useEffect(() => {
    instance.logout();
  }, [instance]);

  return (
    <div>
      <h1>Signing Out...</h1>
      <p>Please wait while we sign you out.</p>
      {/* Optionally, you can add a link to redirect users back to the homepage */}
      <Link to="/home">Go to Homepage</Link>
    </div>
  );
};

export default App;
