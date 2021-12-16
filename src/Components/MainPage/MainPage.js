import React from "react";
import CourseDescripton from "./Articles/CourseDescripton";
import CourseGallery from "./CourseGallery/CourseGallery";
import CourseFeatures from "./CourseFeatures/CourseFeatures";
import classes from './MainPage.module.css'

const MainPage = (props) => {
  return (
    <React.Fragment>
      <button onClick={props.adminChangeHandler} className={classes["admin-mod-btn"]}>
        Admin mod
      </button>

      {<CourseGallery />}
      {<CourseFeatures />}
      {<CourseDescripton />}
      {
        <div className={classes["button-div"]}>
          <button
            onClick={props.registrationPageChangeHandler}
            className={classes["button"]}
          >
            Start registration for course
          </button>
        </div>
      }
    </React.Fragment>
  );
};

export default MainPage;



// {!admin && !registrationPage && (
//     <button
//       onClick={adminChangeHandler}
//       className={classes["admin-mod-btn"]}
//     >
//       Admin mod
//     </button>
//   )}
//   {!admin && !registrationPage && <CourseGallery />}
//   {!admin && !registrationPage && <CourseFeatures />}
//   {!admin && !registrationPage && <CourseDescripton />}
//   {!admin && !registrationPage && (
//     <div className={classes["button-div"]}>
//       <button
//         onClick={registrationPageChangeHandler}
//         className={classes["button"]}
//       >
//         Start registration for course
//       </button>
//     </div>
//   )}