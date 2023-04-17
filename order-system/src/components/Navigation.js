import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from './Images/PizzaPlanetLogo.png';

function NavigationBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo-link">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/menu" className="nav-link">
            Menu
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact-us" className="nav-link">
            Contact Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/FAQ" className="nav-link">
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
