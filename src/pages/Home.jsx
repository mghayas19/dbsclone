import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="logo">
        <img src="https://www.dbs.com/iwov-resources/flp/images/dbs_logo.svg" />
      </div>
      <div className="align">
        <NavLink to="/login" className="btnStyle">
          Login
        </NavLink>
        <p>OR</p>
        <NavLink to="/signup" className="btnStyle">
          Signup
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
