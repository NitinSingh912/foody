import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <form>
      <div className="contact">
        <div className="image-portion">
          <img
            src="https://imgs.search.brave.com/weZllkoYGdBGGyyFJInOp1t3qC4AYdFy_bGfkgCq4HA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/aGVmLXBvaW50aW5n/LWxhdGVyYWwtd2hp/dGUtYmFja2dyb3Vu/ZF8xMzY4LTI4MjYu/anBnP3NpemU9NjI2/JmV4dD1qcGc"
            alt=""
          />
        </div>
        <div className="add-details">
          <div>
            <div className="text">
              <h1>Contact Us!</h1>
            </div>
            <div className="user-name">
              <input placeholder="Enter your full name...." type="text" name="userName" />
            </div>
            <div className="user-email-address">
              <input placeholder="Enter your email address...." type="email" name="email" id="" />
            </div>
            <div className="user-message">
              <textarea placeholder="Enter your message..." name="userMessage" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="contact-submit-button">
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Contact;
