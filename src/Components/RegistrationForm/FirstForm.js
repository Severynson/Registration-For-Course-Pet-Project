import { useCallback, useEffect, useRef } from "react";
import { useState } from "react/cjs/react.development";
import classes from "./FirstForm.module.css";

const FirstForm = (props) => {
  const [username, setUsername] = useState('')
  const [usernameWasTouched, setUsernameWasTouched] = useState(false);
  const [usernameError, setUsernameError] = useState(false);

  
  const usernameInputHandler = (e) => {
    console.log(e.target.value)
    setUsername(e.target.value);
  };

  useEffect(() => {
    if (usernameWasTouched && username.trim().length < 6) {
      setUsernameError(true);
      console.log('Why again!!??')
    } else {
      setUsernameError(false);
    }
  }, [username, usernameWasTouched])

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
      <input ></input>
      <label>Password again:</label>
      <input></input>
      <button type="submit">Create account</button>
    </form>
  );
};

export default FirstForm;
