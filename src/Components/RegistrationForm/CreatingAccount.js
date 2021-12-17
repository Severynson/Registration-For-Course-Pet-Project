import classes from "./CreatingAccount.module.css";
import { React, useRef } from "react/cjs/react.development";
import { useEffect, useState } from "react";
import FirstForm from "./FirstForm";

const CreatingAccount = (props) => {
  const [submitFirstForm, setSubmitFirstForm] = useState(false);
  const [submitSecondForm, setSubmitSecondForm] = useState(false);
  let userData;
  const onSubmitFirstFormHandler = (e) => {
    // e.preventDefault();
    setSubmitFirstForm(true);
    return userData = {
      username: e.usernameRef.current.value,
      password: e.passwordRef.current.value,
      passwordAgain: e.passwordAgainRef.current.value,
    };
    
    // addNewUser(userData);
  };

  useEffect(() => {
    if (submitSecondForm) {
      addNewUser(userData);
    } else {
      return;
    }
  }, [submitSecondForm]);

  console.log(userData)

  const onSubmitSecondFormHandler = (props) => {

  };

  async function addNewUser(userData) {
    const response = await fetch(
      "https://it-incubaror-course-proj-default-rtdb.firebaseio.com/users.json",
      {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
    setTimeout(() => props.registrationPageChangeHandler(), 6500);
  }

  const AcceptSvg = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      style={{ color: "#74b816", height: "100px" }}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );

const pictureRef = useRef('');
const nameRef = useRef('');
const gmailRef = useRef('');
const instagramRef = useRef('');
const textareaRef = useRef('');


  return (
    <div className={classes["registration-form-div"]}>
      {submitFirstForm && <FirstForm onSubmitFirstFormHandler={onSubmitFirstFormHandler}/>}
      {!submitFirstForm && submitSecondForm && (
        <form className={classes["second-form"]}>
          <label>Profile picture:</label>
          <input ref={pictureRef}></input>
          <label>Youre name:</label>
          <input ref={nameRef}></input>
          <label>Youre g-mail:</label>
          <input ref={gmailRef}></input>
          <label>Instagram:</label>
          <input ref={instagramRef}></input>
          <label>What is your motivation for course?</label>
          <textarea ref={textareaRef}></textarea>
        </form>
      )}
      {submitFirstForm && submitSecondForm && (
        <div className={classes["container"]}>
          <div className={classes["svg-and-p"]}>
            <span className={classes["svg-done-icon"]}>
              <AcceptSvg />
            </span>
            <p>Account created successfully!</p>
          </div>
          <div className={classes["description"]}>
            <p>
              We will sent you a feedback in a few days. Check your status in
              the own cabinet.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatingAccount;
