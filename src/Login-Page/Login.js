import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'; 
import Home from './images/home-image.jpg';

const IntroSection = () => {
  return (
    <section id="intro" className="section-3">
      <div className="container mb" style={{marginTop:'200px',marginLeft:''}}>
        <div className="row justify-content-center align-items">
          <div className="col-4 text-start" style={{ marginLeft: '-150px' }}>
            <h1>
              <span
                className="display-fluid sm-text-start "
                style={{ fontFamily: "'Cookie', cursive", fontSize: '6rem', color: 'rgb(155, 51, 168)', textShadow:'2px 2px 2px rgba(0, 0, 0, 0.1)'}}
              >
                Lost
              </span>
              &<span
                className="display-fluid "
                style={{ fontFamily: "'Cookie', cursive", fontSize: '6rem', color: 'rgb(155, 51, 168)',textShadow:'2px 2px 2px rgba(0, 0, 0, 0.1)' }}
              >
                Found
              </span>
            </h1>
            <h4 className="display-6 text-center fw-bold " style={{ fontFamily: "'Merienda', cursive" ,textShadow:'2px 2px 2px rgba(0, 0, 0, 0.1)'}}>
              Welcome!!!
            </h4>
            <div>
            <Link className="btn btn-primary ms-5 ps-5 pe-5 shadow" to="/Login2" style={{marginLeft:'150px',fontFamily:'Poppins'}} >
            Sign In
            </Link>
            </div>
          </div>

          <div className="col-6 d-none d-md-block text-end">
            <img
              className="img-fluid"
              style={{ width: '40vw', minWidth: '300px', marginRight: '-240px' }}
              src={Home}
              alt="logo"
            />
          </div>
        </div >
       
      </div>
    </section>
  );
};

export default IntroSection;
