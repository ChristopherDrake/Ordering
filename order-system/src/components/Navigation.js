import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';



function NavigationBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link" activeClassName="active">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/menu" className="nav-link" activeClassName="active">
            Order
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact-us" className="nav-link" activeClassName="active">
            Contact Us
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="/FAQ" className='nav-link' activeClassName="active">
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
