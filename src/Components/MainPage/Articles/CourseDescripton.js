import React from "react";
import classes from "./CourseDescripton.module.css"

const CourseDescripton = () => {
  return (
    <div className={classes.container}>
      <article>
        <div>
          <h3>About this Specialization</h3>
        </div>
        <div>
          <h5></h5>20,270 recent views
        </div>
        <p>
          This specialisation covers topics ranging from basic computing
          principles to the mathematical foundations required for computer
          science. You will learn fundamental concepts of how computers work,
          which can be applied to any software or computer system. You will also
          gain the practical skillset needed to write interactive, graphical
          programs at an introductory level. The numerical mathematics component
          will provide you with numerical and computational tools that are
          essential for the problem solving and modelling stages of computer
          science.
        </p>
      </article>
      <article>
        <div>
          <h3>Applied Learning Project</h3>
          <p>
            There are a range of activities included in this specialization that
            will enable learners to apply and develop their programming skills
            in a fun and engaging way. Learners will master the fundamentals of
            computer science by solving mathematical puzzles using interactive
            techniques, becoming a detective and solving crimes in an
            interactive sleuth application and apply computer science concepts
            to solve problems found in daily computer use.
          </p>
        </div>
      </article>
    </div>
  );
};

export default CourseDescripton;