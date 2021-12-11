import classes from "./CourseGallery.module.css";
import coffeAndCode from "../../Pictures/coffe&code.jpg";
import writingSomething from "../../Pictures/writing-something.jpg";
import helpingEachOther from "../../Pictures/helpingEachOther.jpg";
import workspace from "../../Pictures/workspace.jpg";

const CourseGallery = () => {
  return (
    
    <section className={classes["gallery-section"]}>
      <img src={coffeAndCode} alt="coffe and notebook with code" />
      <img src={writingSomething} alt="course lesson immage" />
      <img src={helpingEachOther} alt="students working together" />
      <img src={workspace} alt="programmer workspace" />
    </section>
   
  );
};

export default CourseGallery;
