import React from "react";
import { Link } from "react-router-dom";
import "./MessageLogOut.css";


const MessageLogOut = () => {

  return (
    <div className="welcome-page">
      
      <h3> Student gpa system calculator </h3>
      <p className="welcome-message"> Your account is successfull log out ! </p>
      <Link to="/" className="back-link">
        Back to sign in 
      </Link>
    </div>
  );
};

export default MessageLogOut;
