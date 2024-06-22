import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header-style.css'; // Optional, for additional styling
import profile from './images/profile2.png';
import logo from './images/logo 1.png';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-xxl d-flex ">
        <NavLink to="/home" className="navbar-brand">
          <div className="container-lg">
            <div className="row">
              <span className="fw-bold text-secondary">
                <img
                  className="d-none d-lg-block ms-5"
                  style={{ width: '40%', marginTop: '20px' }}
                  src={logo}
                  alt="Lost And Found logo"
                />
                <img
                  className="d-lg-none"
                  style={{ width: '40%', marginTop: '-90px' }}
                  src={logo}
                  alt="Lost And Found logo"
                />
              </span>
            </div>
          </div>
        </NavLink>
        <button
          className="navbar-toggler navbar-toggler-icon rounded-2 icon"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarOffcanvasLg"
          aria-controls="navbarOffcanvasLg"
          aria-label="Toggle navigation"
        >
        </button>
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="navbarOffcanvasLg"
          aria-labelledby="navbarOffcanvasLgLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="navbarOffcanvasLgLabel">Menu</h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <NavItem link="/home" label="Home" />
              <NavItem link="/About" label="About" />
              <NavDropdown label="Report">
                <NavItem link="/Lost" label="Report Lost Items" />
                <DropdownDivider />
                <NavItem link="/Found" label="Report Found Items" />
              </NavDropdown>
              <NavItem link="/faq" label="FAQ" />
              <NavItem link="/feedback" label="Feedback" />
              <SearchForm />
              <ProfileDropdown />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ link, label }) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={link}>{label}</a>
    </li>
  );
}

function NavDropdown({ label, children }) {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {label}
      </a>
      <ul className="dropdown-menu">
        {children}
      </ul>
    </li>
  );
}

function DropdownDivider() {
  return <li><hr className="dropdown-divider" /></li>;
}

function SearchForm() {
  return (
    <li className="nav-item ms-lg-4">
      <form className="d-flex h-25" role="search">
        <input className="form-control me-2 search-input" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-primary search-button" type="submit">Search</button>
      </form>
    </li>
  );
}

function ProfileDropdown() {
  return (
    <li className="nav-item dropdown ms-lg-4">
      <a
        className="nav-link dropdown-toggle ms-5"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          className="rounded-5"
          src={profile}
          alt="profile"
        />{' '}
        Profile
      </a>
      <ul className="dropdown-menu dropdown-menu-end">
        <NavItem link="/profile" label="General" />
        <DropdownDivider />
        <NavItem link="/profile" label="Change Password" />
        <DropdownDivider />
        <NavItem link="/profile" label="Info" />
        <DropdownDivider />
        <NavItem link="/profile" label="Notifications" />
      </ul>
    </li>
  );
}

export default Header;
