import classes from './SecondForm.module.css'
import {React, useRef} from 'react';

const SecondForm = (props) => {
    const pictureRef = useRef('');
    const nameRef = useRef('');
    const gmailRef = useRef('');
    const instagramRef = useRef('');
    const textareaRef = useRef('');

    return (
        <form onSubmit={props.onSubmitSecondFormHandler} className={classes["second-form"]}>
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
      )
}

export default SecondForm;