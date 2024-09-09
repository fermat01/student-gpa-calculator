// SignInForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignInForm.css";

const SignInForm = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send credentials to your backend for authentication
    console.log("User signed in:", credentials);
    navigate("/form"); // Redirect to student form after successful sign-in
  };

  return (
    <div className="signin-form">
      <h3> Student gpa system calculator </h3>
      <h4>Sign In</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      <p class="account-message">
        Don't have an account?{" "}
        <a href="/signup" class="sign-in-link">
          Sign up
        </a>
      </p>
    </div>
  );
};

export default SignInForm;
