// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudFormAndLogout from "./components/StudFormAndLogout";
import ResultPage from "./components/ResultPage";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import AccountCreated from "./components/AccountCreated";
import LogOutForm from "./components/LogOutForm";
import MessageLogOut from "./components/MessageLogOut";



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/log-out" element={<LogOutForm />} />
          <Route path="/account-created" element={<AccountCreated />} />
          <Route path="/form" element={<StudFormAndLogout />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/logout-message" element={<MessageLogOut/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
