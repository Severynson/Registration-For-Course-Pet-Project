import { useCallback, useEffect, useRef } from "react";
import { useState } from "react/cjs/react.development";
import classes from "./FirstForm.module.css";

const FirstForm = (props) => {
  const [username, setUsername] = useState('')
  const [usernameWasTouched, setUsernameWasTouched] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  //
  const [password, setPassword] = useState('');
  const [passwordWasTouched, setPasswordWasTouched] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  //
  const [passwordAgain, setPasswordAgain] = useState('');
  const [passwordAgainWasTouched, setPasswordAgainWasTouched] = useState(false);
  const [passwordAgainError, setPasswordAgainError] = useState(false);

  
  const usernameInputHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordInputHandler = (e) => {
    setPassword(e.target.value);
  };

  const passwordAgainInputHandler = (e) => {
    setPasswordAgain(e.target.value);
  };

  useEffect(() => {
    if (usernameWasTouched && username.trim().length < 6) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
  }, [username, usernameWasTouched])

  useEffect(() => {
    if (passwordWasTouched && password.trim().length < 6 && /\d/.test(password)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  }, [password, passwordWasTouched])

  useEffect(() => {
    if (passwordAgainWasTouched && passwordAgain != password) {
      setPasswordAgainError(true);
    } else {
      setPasswordAgainError(false);
    }
  }, [passwordAgain, passwordAgainWasTouched])

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (username.trim() === '') return;
    console.log("Account was created!");
    // props.onSubmitFirstFormHandler({
    //   usernameRef: usernameRef,
    //   passwordRef: passwordRef,
    //   passwordAgainRef: passwordAgainRef,
    // });
  };



  return (
    <form className={classes["first-form"]} onSubmit={onSubmitHandler}>
      <label>Username:</label>
      <input onChange={usernameInputHandler} onBlur={() => setUsernameWasTouched(true)}></input>
      {(usernameError && <p className={classes["error-text"]}>Username is too short!</p>)}
      <label>Password:</label>
      <input onChange={passwordInputHandler} onBlur={() => setPasswordWasTouched(true)}></input>
      {(passwordError && <p className={classes["error-text"]}>Password is too short or doesn't includes any number!</p>)}
      <label>Password again:</label>
      <input onChange={passwordAgainInputHandler} onBlur={() => setPasswordAgainWasTouched(true)}></input>
      {(passwordAgainError && <p className={classes["error-text"]}>Passwords are not matching!</p>)}
      <button type="submit">Create account</button>
    </form>
  );
};

export default FirstForm;
