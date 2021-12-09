import classes from "./CourseGallery.module.css"
import coffeAndCode from "../../Pictures/coffe&code.jpg";
import writingSomething from "../../Pictures/writing-something.jpg";
import helpingEachOther from "../../Pictures/helpingEachOther.jpg";
import workspace from "../../Pictures/workspace.jpg";

const CourseGallery = () => {
    return (
        <section className={classes["gallery-section"]}>
            <img src={coffeAndCode} />
            <img src={writingSomething} />
            <img src={helpingEachOther} />
            <img src={workspace} />
        </section>
    )
}

export default CourseGallery;