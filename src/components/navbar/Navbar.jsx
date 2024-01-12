import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import { useState } from "react";
const Navbar = () => {
  const [show,setShow]  = useState(false)
  const onClick = ()=>{
    if(show){
      setShow(!show)
    }else{
      setShow(!show)
    }
  }
  return (
    <header>
      <div className="left-side-header">
        <Link to="/">
          <img
            src="https://imgs.search.brave.com/LBFZ6yOP03zustJSL9yxmV-9-03W5d6TMPl3UKRSrbo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Zm9vZGllcXIuY29t/L2Fzc2V0cy9pbWcv/Zm9vZGllY2FyZC5w/bmc"
            alt="logo"
          />
        </Link>
      </div>
      <div className="right-side-header">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </ul>
      </div>
      <div onClick={onClick} className="right-side-header-for-mobile">
        <HiDotsCircleHorizontal size={30} />
      </div>
      {show && <div className="dropdown" >   <ul className="ul-dropdown" >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </ul></div>}
    </header>
  );
};

export default Navbar;
