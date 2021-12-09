import classes from './RegistrationForm.module.css'

const RegistrationForm = () => {
  return (
    <div className={classes["registration-form-div"]}>
      <form>
        <label>Username:</label>
        <input></input>
        <label>Password:</label>
        <input></input>
        <label>Password again:</label>
        <input></input>
      </form>
    </div>
  );
};

export default RegistrationForm;
