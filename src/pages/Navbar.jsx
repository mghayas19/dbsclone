import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
  return <div className='navigation'>
      <div className="head"></div>
      <div className="nav">
        <nav className="navbar">
          <ul className="ul">
            <li className="li">
              <img
                className="logo"
                src="https://www.dbs.com/iwov-resources/flp/images/dbs_logo.svg"
              />
            </li>
            <li className="li">
              <NavLink className="p" to="/">
                Account
              </NavLink>
            </li>
            <li className="li">
              <NavLink className="p" to="/transactions">
                Transactions
              </NavLink>
            </li>
            <li className="li">
              <NavLink className="p" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
  </div>
  </div>;
};

export default Navbar;
