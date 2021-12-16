import React, { useState } from "react";
import classes from "./App.module.css";
import Header from "./Components/Header/Header";
import CreatingAccount from "./Components/RegistrationForm/CreatingAccount";
import AdminAcceptingStudents from "./Components/Admin/AdminAcceptingStudents.js";
import MainPage from "./Components/MainPage/MainPage";

function App() {
  const [registrationPage, setRegistrationPage] = useState(false);
  const [logInPage, setLogInPage] = useState(false);
  const [admin, setAdmin] = useState(false);

  const registrationPageChangeHandler = () => {
    setRegistrationPage((prevStatus) => !prevStatus);
  };

  const adminChangeHandler = () => {
    setAdmin((prevState) => !prevState);
    console.log(admin);
  };

  return (
    <React.Fragment>
      <Header />
      {admin && <AdminAcceptingStudents />}
      {!admin && !registrationPage && (
        <MainPage
          registrationPageChangeHandler={registrationPageChangeHandler}
          adminChangeHandler={adminChangeHandler}
        />
      )}
      {!admin && !logInPage && !registrationPage && (
        <div className={classes["button-div"]}>
          <button className={classes["button"]}>Log In</button>
        </div>
      )}
      {registrationPage && (
        <CreatingAccount
          registrationPageChangeHandler={registrationPageChangeHandler}
        />
      )}
    </React.Fragment>
  );
}

export default App;
