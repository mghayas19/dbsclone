import React from "react";
import { NavLink } from "react-router-dom";
import "./Accountpage.css";
import Navbar from "./Navbar";
const Accountpage = () => {
  return (
    <div className="accountpage">
      <Navbar/>
      <div className="accountdetails">
        <div className="user">
          <img
            className="acc"
            src="https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png"
          />
          <div className="details">
            <p>Mohammed Ghayasuddin</p>
            <p>+917032887894</p>
            <p>mghayasuddin2000@gmail.com</p>
          </div>
        </div>
        <div className="borderline"></div>
        <div className="transactionForm">
          <div className="part">
            <label>To</label>
            <input type="text" />
          </div>
          <div className="part">
            <label>Amount</label>
            <input type="text" />
          </div>
          <div className="button">Send</div>
        </div>
      </div>
    </div>
  );
};
export default Accountpage;
