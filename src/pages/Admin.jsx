import React from "react";
import "./Admin.css";
import { AiOutlineSearch } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
const Admin = () => {
  return (
    <div className="admin">
      <Navbar/>
      <div className="buttons">
      <button className="red">High Risk</button>
      <button className="blue">Medium Risk</button>
      <button className="yellow">Low Risk</button>
      </div>
      <div className="data1">
        <div className="search1">
          <input type="text" placeholder="Search here" />
          <AiOutlineSearch className="icon1" />
        </div>
        <table>
          <tr className="headRow1">
            <th>S. No</th>
            <th>Transaction Id</th>
            <th>From</th>
            <th>To</th>
            <th>Time</th>
            <th>Amount</th>
            <th>Edit/Delete</th>
          </tr>
          <tr>
            <td>1</td>
            <td>1234</td>
            <td>Mohammed Ghayasuddin</td>
            <td>User1</td>
            <td>4:50</td>
            <td>800</td>
            <td><button>Update</button>
            <button>Delete</button>
            </td>
          </tr>{" "}
          <tr>
            <td>2</td>
            <td>2345</td>
            <td>Mohammed Ghayasuddin</td>
            <td>User2</td>
            <td>4:55</td>
            <td>1000</td>
            <td><button>Update</button>
            <button>Delete</button></td>
          </tr>{" "}
          <tr>
            <td>3</td>
            <td>3456</td>
            <td>Mohammed Ghayasuddin</td>
            <td>User3</td>
            <td>5:00</td>
            <td>1200</td>
            <td><button>Update</button>
            <button>Delete</button></td>
          </tr>{" "}
          <tr>
            <td>4</td>
            <td>4567</td>
            <td>Mohammed Ghayasuddin</td>
            <td>User4</td>
            <td>5:05</td>
            <td>1400</td>
            <td><button>Update</button>
            <button>Delete</button></td>
          </tr>{" "}
          <tr>
            <td>1</td>
            <td>7864</td>
            <td>Mohammed Ghayasuddin</td>
            <td>User5</td>
            <td>5:10</td>
            <td>160</td>
            <td><button>Update</button>
            <button>Delete</button></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Admin;