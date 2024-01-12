import React from 'react'
import "./signup.css"
const Signup = () => {
  return (
    <form>
    <div className="Signup-page-css">
      <div className="Signup-content">
        <div>
          <div className="First-name">
            <input
              placeholder="Enter your First Name...."
              type="email"
              name="email"
            />
          </div>
          <div className="Last-name">
            <input
              placeholder="Enter your Last Name...."
              type="email"
              name="email"
            />
          </div>
          <div className="email-address">
            <input
              placeholder="Make your email address...."
              type="email"
              name="email"
            />
          </div>
          <div className="password">
            <input
              placeholder="Make a strong password...."
              type="password"
              name="password"
            />
          </div>
        
         
          <div  className="Signup-button"><button type="submit" >Signup</button></div>
         
        </div>
      </div>
    </div>
  </form>
  )
}

export default Signup