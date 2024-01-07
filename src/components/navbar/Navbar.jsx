import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      
        <div className="left-side-header">
          <img
            src="https://imgs.search.brave.com/LBFZ6yOP03zustJSL9yxmV-9-03W5d6TMPl3UKRSrbo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Zm9vZGllcXIuY29t/L2Fzc2V0cy9pbWcv/Zm9vZGllY2FyZC5w/bmc"
            alt="logo"
          />
        </div>
        <div className="right-side-header">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Contact</li>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </ul>
        </div>
    
    </header>
  );
};

export default Navbar;
