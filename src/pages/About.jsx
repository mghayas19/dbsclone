import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <Navbar/>
      <div className="para">
        <p>
          {" "}
          DBS Bank Limited (abbreviation: DBS) is a Singaporean multinational
          banking and financial services corporation headquartered at the Marina
          Bay Financial Centre in the Marina Bay district of Singapore. The
          company was previously known in its full name of The Development Bank
          of Singapore Limited, which "DBS" was derived from, before the present
          abbreviated name was adopted on 21 July 2003 to reflect its role as a
          global bank.[5] It is one of the three so-called Singaporean
          megabanks, along with OCBC Bank and United Overseas Bank (UOB).
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Marina_Bay_Financial_Centre%2C_Singapore_-_20121110.jpg/250px-Marina_Bay_Financial_Centre%2C_Singapore_-_20121110.jpg"
          alt="DBS Headquarters"
        />
      </div>
    </div>
  );
};

export default About;
