import React, { useState } from "react";
import classes from "./App.module.css";
import Header from "./Components/Header/Header";
import CourseDescripton from "./Components/Articles/CourseDescripton";
import CourseGallery from "./Components/CourseGallery/CourseGallery";
import CourseFeatures from "./Components/CourseFeatures/CourseFeatures.js";
import CreatingAccount from "./Components/RegistrationForm/CreatingAccount";
import AdminAcceptingStudents from "./Components/Admin/AdminAcceptingStudents.js";

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
        <button
          onClick={adminChangeHandler}
          className={classes["admin-mod-btn"]}
        >
          Admin mod
        </button>
      )}
      {!admin && !registrationPage && <CourseGallery />}
      {!admin && !registrationPage && <CourseFeatures />}
      {!admin && !registrationPage && <CourseDescripton />}
      {!admin && !registrationPage && (
        <div className={classes["button-div"]}>
          <button
            onClick={registrationPageChangeHandler}
            className={classes["button"]}
          >
            Start registration for course
          </button>
        </div>
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
