// src/components/SideBySideForm.js
import React from "react";
import StudentForm from "./StudentForm";
import LogOutForm from "./LogOutForm";
import "./StudFormAndLogout.css";

const SideBySideForm = () => {
  return (
    <div className="parent-container">
      <div className="container1">
        <StudentForm />
      </div>
      <div className="container2">
        <LogOutForm />
      </div>
    </div>
  );
};

export default SideBySideForm;
