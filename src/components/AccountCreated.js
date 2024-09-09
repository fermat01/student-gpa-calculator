import React from "react";
import { Link } from "react-router-dom";
import "./AccountCreated.css";


const AcountCreated = () => {

  return (
    <div className="account-page">
      
      <h3> Your account is successfull created ! </h3>
      <p className="welcome-message"> Your account is successfull created ! </p>
      <Link to="/" className="back-link">
        Back to sign in 
      </Link>
    </div>
  );
};

export default AcountCreated;
