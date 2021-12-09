import classes from "./Header.module.css";
import incubatorImg from "../../Pictures/incubator-600x450.jpg";

const Header = () => {
  return (
    <header className={classes["main-header"]}>
      <span className={classes["main-header-span"]}>
        <h1>It-incubator</h1>
        <img
          src={incubatorImg}
          className={classes["incubator-img"]}
          alt="chicken incubatore immage"
        />
      </span>
      <span>
        <h2>Studing platform</h2>
      </span>
    </header>
  );
};

export default Header;
