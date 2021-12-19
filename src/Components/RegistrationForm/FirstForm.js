import { useCallback, useRef } from "react";
import classes from "./FirstForm.module.css";

const FirstForm = (props) => {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const passwordAgainRef = useRef("");

  useCallback(
    props.liftingUpFirstFormRefs({
      usernameRef: usernameRef,
      passwordRef: passwordRef,
      passwordAgainRef: passwordAgainRef,
    }),
    []
  );

  return (
    <form
      className={classes["first-form"]}
      onSubmit={props.onSubmitFirstFormHandler}
    >
      <label>Username:</label>
      <input ref={usernameRef}></input>
      <label>Password:</label>
      <input ref={passwordRef}></input>
      <label>Password again:</label>
      <input ref={passwordAgainRef}></input>
      <button type="submit">Create account</button>
    </form>
  );
};

export default FirstForm;
