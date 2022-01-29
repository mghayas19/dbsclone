import logo from "./logo.svg";
import "./App.css";
import Signup from "./pages/Signup";
import Accountpage from "./pages/Accountpage";
import Transaction from "./pages/Transaction";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import { Route, Routes } from "react-router";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Accountpage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/transactions" element={<Transaction />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
