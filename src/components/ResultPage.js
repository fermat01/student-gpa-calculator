// ResultPage.js
import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./ResultPage.css";

const ResultPage = () => {
  const location = useLocation();
  const { fullName, gpa } = location.state || {};

  const getCongratulationMessage = (gpa) => {
    switch (gpa) {
      case "A+":
        return "Excellent! Your performance is outstanding. Keep up the fantastic work!";
      case "A":
        return "Great job! You've demonstrated excellent understanding and skills.";
      case "A-":
        return "Very good! You're performing at a high level. Keep pushing yourself!";
      case "B+":
        return "Good work! You're showing strong performance. There's room to reach even higher!";
      case "B":
        return "Well done! You're performing above average. Keep striving for excellence!";
      case "B-":
        return "Good effort! You're on the right track. Try to push a bit harder for even better results.";
      case "C+":
        return "You're doing okay. With some extra effort, you can improve your performance significantly.";
      case "C":
        return "You've met the basic requirements. Consider seeking additional support to enhance your understanding.";
      case "C-":
        return "You're just meeting the minimum standards. It's important to put in more effort to improve your grades.";
      case "D+":
        return "You're close to passing, but need to work harder. Don't hesitate to ask for help to improve your performance.";
      case "D":
        return "You've barely passed. It's crucial to seek additional support and put in more effort to improve.";
      case "F":
        return "Unfortunately, you didn't pass this time. Don't be discouraged - with hard work and support, you can improve. Reach out to your instructors for guidance.";
      default:
        return "Your results have been recorded. Keep working on your studies!";
    }
  };

  return (
    <div className="result-page">
      <h2>Academic year result</h2>
      <p>Student name: {fullName}</p>
      <p>GPA: {gpa}</p>
      <h3> Congratulations on completing a year! 🎉🎉 </h3>
      <p className="congratulation-message">{getCongratulationMessage(gpa)}</p>
      <Link to="/" className="back-link">
        Back to Form
      </Link>
    </div>
  );
};

export default ResultPage;
