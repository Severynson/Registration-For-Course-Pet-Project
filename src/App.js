import React, { useState } from "react";
import classes from "./App.module.css";
import Header from "./Components/Header/Header";
import CourseDescripton from "./Components/Articles/CourseDescripton";
import CourseGallery from "./Components/CourseGallery/CourseGallery";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
import CourseFeatures from "./Components/CourseFeatures/CourseFeatures.js"

function App() {
  const [registrationPage, setRegistrationPage] = useState(false);
  const [logInPage, setLogInPage] = useState(false);

  const registrationPageChangeHandler = () => {
    setRegistrationPage((prevStatus) => !prevStatus);
  };

  const logInHandler = () => {};

  return (
    <React.Fragment>
      <Header />
      {!registrationPage && <CourseGallery />}
      {!registrationPage && <CourseFeatures />}
      {!registrationPage && <CourseDescripton />}
      {!registrationPage && (
        <div className={classes["button-div"]}>
          <button
            onClick={registrationPageChangeHandler}
            className={classes["button"]}
          >
            Start registration for course
          </button>
        </div>
      )}
      { !logInPage && !registrationPage &&
        <div className={classes["button-div"]}>
          <button className={classes["button"]}>Log In</button>
        </div>
      }
      {registrationPage && (
        <RegistrationForm
          registrationPageChangeHandler={registrationPageChangeHandler}
        />
      )}
    </React.Fragment>
  );
}

export default App;
