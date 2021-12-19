import { useCallback, useEffect, useRef } from "react";
import { useState } from "react/cjs/react.development";
import classes from "./FirstForm.module.css";

const FirstForm = (props) => {
  const [usernameWasClicked, setUsernameWasClicked] = useState(false);
  const [passwordWasClicked, setPasswordWasClicked] = useState(false);
  const [passwordAgainWasClicked, setPasswordAgainWasClicked] = useState(false);
  const [usernameIsBlured, setUsernameIsBlured] = useState(false);
  const [passwordIsBlured, setPasswordIsBlured] = useState(false);
  const [passwordAgainIsBlured, setPasswordAgainIsBlured] = useState(false);
  const [usernameIsVald, setUsernameIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [passwordAgainIsValid, setPasswordAgainIsValid] = useState(true);
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const passwordAgainRef = useRef("");
  console.log(usernameWasClicked)
  console.log(usernameIsBlured)

  useEffect(() => {
    if (usernameWasClicked && usernameIsBlured) {
      setUsernameIsValid(false);
    }
    if (usernameWasClicked) {

    }

  }, [
    usernameRef,
    passwordRef,
    passwordAgainRef,
    usernameIsVald,
    passwordIsValid,
    passwordAgainIsValid,
    usernameWasClicked,
    usernameIsBlured
  ]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onSubmitFirstFormHandler({
      usernameRef: usernameRef,
      passwordRef: passwordRef,
      passwordAgainRef: passwordAgainRef,
    });
  };

  return (
    <form className={classes["first-form"]} onSubmit={onSubmitHandler}>
      <label>Username:</label>
      <input
           onBlur={() => {
          console.log('Username was blured')
          setUsernameIsBlured(true);
        }}
        onClick={() => {
          console.log('Username was clicked')
          setUsernameWasClicked(true);
        }}
   
        ref={usernameRef}
      ></input>
      {!usernameIsVald && <p>Something isn't OK in this field!</p>}
      <label>Password:</label>
      <input
        onClick={() => {
          setPasswordWasClicked(true);
        }}
        onBlur={() => {
          setPasswordIsBlured(true);
        }}
        ref={passwordRef}
      ></input>
      <label>Password again:</label>
      <input
        onClick={() => {
          setPasswordAgainWasClicked(true);
        }}
        onBlur={() => {
          setPasswordAgainIsBlured(true);
        }}
        ref={passwordAgainRef}
      ></input>
      <button type="submit">Create account</button>
    </form>
  );
};

export default FirstForm;
