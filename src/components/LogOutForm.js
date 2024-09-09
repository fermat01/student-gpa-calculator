import React from "react";
import "./LogOutForm.css";
import { useNavigate } from "react-router-dom";




const LogOutForm = () => {
  const navigate = useNavigate();
  // Handle logout
  const handleLogout = () => {
    // You can add any logout logic here (e.g., clearing user data)
    navigate("/logout-message"); // Redirect to home page
  };
    

  return (
    <div className="container1">
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default LogOutForm;
