import classes from "./CreatingAccount.module.css";
import { React } from "react";
import { useEffect, useState } from "react";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
  let userData = {};

const CreatingAccount = (props) => {
  const [submitFirstForm, setSubmitFirstForm] = useState(false);
  const [submitSecondForm, setSubmitSecondForm] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);


  const onSubmitFirstFormHandler = (props) => {
    console.log(props.username);
    setSubmitFirstForm(true);
    return (userData = {
      username: props.username,
      password: props.password,
      passwordAgain: props.passwordAgain,
    });
  };

  const onSubmitSecondFormHandler = (data) => {
    console.log("mmmmm----------mmmmmm");
    userData.userPicture = data.userPicture[0];
    userData.name = data.name;
    userData.instagram = data.instagram;
    userData.gmail = data.gmail;
    userData.textarea = data.textarea;
    delete userData.passwordAgain;
    console.log(userData)
    setSubmitSecondForm(true);
    addNewUser(userData);
    setAccountCreated(true);
    setTimeout(() => {
      setAccountCreated(false);
    }, 5000)
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

  return (
    <div className={classes["registration-form-div"]}>
      {!submitFirstForm && !submitSecondForm && (
        <FirstForm onSubmitFirstFormHandler={onSubmitFirstFormHandler} />
      )}
      {submitFirstForm && submitSecondForm && accountCreated && (
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
      {submitFirstForm && !submitSecondForm && (
        <SecondForm
          userData={userData}
          onSubmitSecondFormHandler={onSubmitSecondFormHandler}
        />
      )}
    </div>
  );
};

export default CreatingAccount;
