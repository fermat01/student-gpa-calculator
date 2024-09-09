import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentForm.css";

const StudentForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    studentId: "",
    firstName: "",
    lastName: "",
    bornDate: "",
    assignment1: "",
    assignment2: "",
    assignment3: "",
    midterm1: "",
    midterm2: "",
    final: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateGPA = () => {
    const scores = [
      parseFloat(formData.assignment1) * 0.1,
      parseFloat(formData.assignment2) * 0.1,
      parseFloat(formData.assignment3) * 0.1,
      parseFloat(formData.midterm1) * 0.2,
      parseFloat(formData.midterm2) * 0.2,
      parseFloat(formData.final) * 0.3,
    ];

    const average = scores.reduce((a, b) => a + b, 0);

    if (average >= 90) return "A+";
    if (average >= 85) return "A";
    if (average >= 80) return "A-";
    if (average >= 75) return "B+";
    if (average >= 70) return "B";
    if (average >= 65) return "B-";
    if (average >= 60) return "C+";
    if (average >= 55) return "C";
    if (average >= 50) return "C-";
    if (average >= 45) return "D+";
    if (average >= 40) return "D";
    return "F";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const gpa = calculateGPA();
    navigate("/result", {
      state: {
        fullName: `${formData.firstName} ${formData.lastName}`,
        gpa: gpa,
      },
    });
  };

  // Handle logout
 

  return (
    <div className="student-form">
     
      <h2>Student Information</h2>
      <div className="header">{/* Add any header content if needed */}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="studentId"
          placeholder="Student ID"
          value={formData.studentId}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="bornDate"
          placeholder="Born date"
          value={formData.bornDate}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="assignment1"
          placeholder="First Assignment Score"
          value={formData.assignment1}
          onChange={handleChange}
          required
          min="0"
          max="100"
          step="0.01"
        />
        <input
          type="number"
          name="assignment2"
          placeholder="Second Assignment Score"
          value={formData.assignment2}
          onChange={handleChange}
          required
          min="0"
          max="100"
          step="0.01"
        />
        <input
          type="number"
          name="assignment3"
          placeholder="Third Assignment Score"
          value={formData.assignment3}
          onChange={handleChange}
          min="0"
          max="100"
          step="0.01"
          required
        />
        <input
          type="number"
          name="midterm1"
          placeholder="First Midterm Score"
          value={formData.midterm1}
          onChange={handleChange}
          min="0"
          max="100"
          step="0.01"
          required
        />
        <input
          type="number"
          name="midterm2"
          placeholder="Second Midterm Score"
          value={formData.midterm2}
          onChange={handleChange}
          min="0"
          max="100"
          step="0.01"
          required
        />
        <input
          type="number"
          name="final"
          placeholder="Final Exam Score"
          value={formData.final}
          onChange={handleChange}
          min="0"
          max="100"
          step="0.01"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;
