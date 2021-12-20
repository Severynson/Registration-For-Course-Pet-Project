import classes from './SecondForm.module.css'
import {React} from 'react';
import { useForm } from 'react-hook-form';
import galleryIcon from "../../Pictures/gallery-icon.png";

const SecondForm = (props) => {
  const { register, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(props.onSubmitSecondFormHandler)} className={classes["second-form"]}>
        <div className={classes["add-picture-div"]}>
          <img src={galleryIcon} className={classes["gallery-icon"]} />
            <label>Avatar-picture:   </label>
          <input type="file" {...register('userPicture')} />
        </div>
          <label>Name:</label>
          <input {...register('name')} />
          <label>G-mail:</label>
          <input {...register('gmail')} />
          <label>Instagram or some social media:</label>
          <input {...register('instagram')} />
          <label>Tell about yourself and write youre motivation to learn on course:</label>
          <textarea {...register('textarea')} />
          <button>Submit</button>
        </form>
      )
}

export default SecondForm;