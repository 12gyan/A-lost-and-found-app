import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css'
import { NavLink } from 'react-router-dom';


function Footer() {
  return (
    <footer className="text-white bottom" style={{ backgroundColor: 'rgb(155, 51, 168)', minWidth: '700px' ,}}>
      <Container className="d-none d-lg-block text-start">
        <Row className="align-items-start text-start pt-5 pb-5 link-underline link-underline-opacity-0">
          <Col md={3}>
            <strong>About Us</strong>
            <div><NavLink className="text-white link-underline link-underline-opacity-0" to="/home">Home</NavLink></div>
            <div><NavLink className="text-white link-underline link-underline-opacity-0" to="/About">About</NavLink></div>
            <div><NavLink className="text-white link-underline link-underline-opacity-0" to="/feedback">Feedback</NavLink></div>
          </Col>
          <Col md={3}>
            <strong>Services</strong>
            <div><NavLink className="text-white link-underline link-underline-opacity-0" to="/Lost">Report Lost Items</NavLink></div>
            <div><NavLink className="text-white link-underline link-underline-opacity-0" to="/Found">Report Found Items</NavLink></div>
            <div><NavLink className="text-white link-underline link-underline-opacity-0" to="help">Help Us Find</NavLink></div>
          </Col>
          <Col md={2}>
            <strong>Partners</strong>
            <div><NavLink className="text-white link-underline link-underline-opacity-0" to="/team">Our Team</NavLink></div>
            <div><NavLink className="text-white link-underline link-underline-opacity-0" to="https://knust-community.com">KNUST COMMUNITY</NavLink></div>
          </Col>
          <Col md={2}>
            <strong>Feedback</strong>
            <div><NavLink className="text-white link-underline link-underline-opacity-0" to="www.">Email</NavLink></div>
            <div><NavLink className="text-white link-underline link-underline-opacity-0" to="tel:+233 5000 99299">Contact Number</NavLink></div>
            <div><NavLink className="text-white link-underline link-underline-opacity-0" to="www.KNUST.edu.gh">Visit Us</NavLink></div>
          </Col>
          <Col md={2}>
            <strong>Social</strong>
            <div>[// eslint-disable-next-line]
              <a className="text-white link-underline link-underline-opacity-0 d-inline" to="https://www.instagram.com/knustkumasi">
              <i class="bi bi-linkedin" style={{fontSize:'2rem'}}> </i>
              </a>
              <a className="text-white link-underline link-underline-opacity-0 d-inline"to="https://twitter.com/KNUSTKumasi">
              <i class="bi bi-twitter-x" style={{fontSize:'2rem'}}> </i>
              </a>
              <a className="text-white link-underline link-underline-opacity-0 d-inline" to="https://www.facebook.com/KNUSTksi">
              <i class="bi bi-facebook" style={{fontSize:'2rem'}}/>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="d-lg-none text-start">
        <Row className="align-items-start pt-5 pb-5 link-underline link-underline-opacity-0">
          <Col xs={4}>
            <strong>About Us</strong>
            <div><NavLink className="text-white link-underline link-underline-opacity-0" to="/home">Home</NavLink></div>
            <div><NavLink className="text-white link-underline link-underline-opacity-0" to="/About">About</NavLink></div>
            <div><NavLink className="text-white link-underline link-underline-opacity-0" to="/feedback">Feedback</NavLink></div>
          </Col>
          <Col xs={4}>
            <strong>Services</strong>
            <div><NavLink className="text-white link-underline link-underline-opacity-0" to="/Lost">Report Lost Items</NavLink></div>
            <div><NavLink className="text-white link-underline link-underline-opacity-0" to="/Found">Report Found Items</NavLink></div>
            <div><NavLink className="text-white link-underline link-underline-opacity-0" to="help">Help Us Find</NavLink></div>
          </Col>
          <Col xs={4}>
            <strong>Partners</strong>
            <div><NavLink className="text-white link-underline link-underline-opacity-0" to="/Team">Our Team</NavLink></div>
            <div><a className="text-white link-underline link-underline-opacity-0" href="https://knust-community.com">KNUST COMMUNITY</a></div>
          </Col>
          <Col xs={6} className="mt-5">
          <div><NavLink className="text-white link-underline link-underline-opacity-0" to="www.">Email</NavLink></div>
            <div><NavLink className="text-white link-underline link-underline-opacity-0" to="tel:+233 5000 99299">Contact Number</NavLink></div>
            <div><NavLink className="text-white link-underline link-underline-opacity-0" to="www.KNUST.edu.gh">Visit Us</NavLink></div>
          </Col>
          <Col xs={6} className="mt-5">
            <strong>Social</strong>
            <div>
              <a className="text-white link-underline link-underline-opacity-0 d-inline" href="https://www.LinkedIn.com/knustkumasi/">
              <i class="bi bi-linkedin" style={{fontSize:'2rem'}}> </i>
              </a>
              <a className="text-white link-underline link-underline-opacity-0 d-inline" href="https://x.com/KNUSTKumasi">
                <i class="bi bi-twitter-x" style={{fontSize:'2rem'}}> </i>
              </a>
              <a className="text-white link-underline link-underline-opacity-0 d-inline" href="https://www.facebook.com/KNUSTksi">
              <i class="bi bi-facebook" style={{fontSize:'2rem'}}/>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
