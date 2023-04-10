import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

function NavigationBar() {
    return (
      <nav className="navbar">
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
        </ul>
      </nav>
    );
  }
export default NavigationBar;