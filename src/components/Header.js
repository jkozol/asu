import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="container-fluid" id="header">
        <div className="row" id="logo">
          <NavLink to="/" className="navbar-brand">Jacob Kozol</NavLink>
        </div>
        <ul className="nav nav-tabs justify-content-center">
          <li className="nav-item">
            <NavLink className="nav-link" to='/store'>Buy</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/about'>Us</NavLink>
          </li>
        </ul>
      </div>
    );
  }
};

export default Header;
