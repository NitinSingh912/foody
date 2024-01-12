import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="homepage">
      <div className="left-side-home"></div>
      <div className="right-side-home">
        <div>
          <h1>Welcome to Foody Restaurent!</h1>

          <Link to="/menu" ><button className="order-button">Order Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
