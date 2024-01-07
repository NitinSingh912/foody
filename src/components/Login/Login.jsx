import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <form>
      <div className="login-page-css">
        <div className="login-content">
          <div>
            <div className="email-address">
              <input
                placeholder="Enter your email address...."
                type="email"
                name="email"
              />
            </div>
            <div className="password">
              <input
                placeholder="Enter your password...."
                type="password"
                name="password"
              />
            </div>
            <div className="double-stuff">
              <div className="remember-me">
                <label>
                  <input type="checkbox" name="rememberMe" />
                  <span>Remember Me</span>
                </label>
              </div>
              <div className="forget-password">Forget Password?</div>
            </div>
            <div className="signup">
              No Login Don't worry <Link to="/signup">Sign Up</Link>
            </div>
            <div  className="login-button"><button type="submit" >Login</button></div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
