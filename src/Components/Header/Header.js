import classes from "./Header.module.css";
import incubatorImg from "../../Pictures/incubator-600x450.jpg";
import { useEffect, useState } from "react";

const Header = () => {
  var manPng = (
    <span>
      <p>Before Course:</p>
      <img src="https://img.icons8.com/emoji/48/000000/man.png" alt="Man emoji"/>
    </span>
  );
  var hulkPng = (
    <span>
      <p>After Course:</p>
      <img src="https://img.icons8.com/color/48/000000/hulk.png" alt="Hulk emoji" />
    </span>
  );

  const [animation, setAnimation] = useState(manPng);
  const [bulinForAnimation, setBulinForAnimation] = useState(true);

  useEffect(() => {
    if (bulinForAnimation === false) {
      setAnimation(() => hulkPng);
    } else if (bulinForAnimation === true) {
      setAnimation(() => manPng);
    }
    stateChangingFunc();
  }, [bulinForAnimation]);

  const stateChangingFunc = () => {
    setTimeout(() => {
      setBulinForAnimation((prevState) => !prevState);
    }, 10000);
  };

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
      <span className={classes["man-or-hulk-span"]}>{animation}</span>
      <span>
        <h2>Studing platform</h2>
      </span>
    </header>
  );
};

export default Header;
