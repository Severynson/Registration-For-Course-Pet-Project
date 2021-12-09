import React, { useState } from "react";
import classes from "./App.module.css";
import Header from "./Components/Header/Header";
import CourseDescripton from "./Components/Articles/CourseDescripton";
import CourseGallery from "./Components/CourseGallery/CourseGallery";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";

function App() {
  const [registrationPage, setRegistrationPage] = useState(false);

  const registrationPageChangeHandler = () => {
    setRegistrationPage((prevStatus) => !prevStatus);
  };

  return (
    <React.Fragment>
      <Header />
      {!registrationPage && <CourseGallery />}
      {!registrationPage && <CourseDescripton />}
      {!registrationPage && (
        <div className={classes["button-div"]}>
          <button onClick={registrationPageChangeHandler} className={classes["registration-for-course"]}>
            Start registration for course
          </button>
        </div>
      )}
      {registrationPage && <RegistrationForm />}
    </React.Fragment>
  );
}

export default App;
