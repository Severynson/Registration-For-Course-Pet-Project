import classes from "./Header.module.css";
import incubatorImg from "../../Pictures/incubator-600x450.jpg";
import { useEffect, useState } from "react";

const Header = () => {
  var manPng = (
    <span>
      <p>Before Course:</p>
      <img src="https://img.icons8.com/emoji/48/000000/man.png" />
    </span>
  );
  var hulkPng = (
    <span>
      <p>After Course:</p>
      <img src="https://img.icons8.com/color/48/000000/hulk.png" />
    </span>
  );

  const [animation, setAnimation] = useState(manPng);
  const [bulinForAnimation, setBulinForAnimation] = useState(true);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {

  //   }, 5000)

  //   return () => clearInterval(intervalId); //This is important

  // }, [animation])

  useEffect(() => {
    if (bulinForAnimation === false) {
        setAnimation(() => hulkPng);
        console.log('Hulk')
      } else if (bulinForAnimation === true) {
        setAnimation(() => manPng);
        console.log('Man')
      }

      stateChangingFunc();
  }, [bulinForAnimation])

  const stateChangingFunc = () => {
     setTimeout(() => {
    setBulinForAnimation((prevState) => !prevState)
    console.log(bulinForAnimation)
  }, 3000);
  }
 

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
      <span>{animation}</span>
      <span>
        <h2>Studing platform</h2>
      </span>
    </header>
  );
};

export default Header;
