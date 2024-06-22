import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'; // Your CSS file for styles
import aboutBgPng from './images/about-bg.png'; // Adjust the import path according to your project structure

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col justify-content-start mt-5">
            <img src={aboutBgPng} alt="happy people" className="i" />
          </div>
          <div className="col text-align">
            <div className="display-2 fw-bold">About Us</div>
            <h4 className="mt-5">
              On our
              <span
                style={{
                  fontFamily: 'cookie, cursive',
                  fontSize: '6rem',
                  color: 'rgb(145, 96, 190)',
                }}
              >Lost & Found</span>
            </h4>
            <h4>
              platform, we are dedicated to reuniting people with their lost belongings and restoring what's been found. We understand the frustration and anxiety that comes with losing something valuable, whether it's a sentimental item or a daily essential.
            </h4>
            <Link to="/home" className="btn btn-primary text-white">
              <h5>Try Us Out</h5>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
