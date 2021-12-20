
import {React} from 'react';
import { useForm } from 'react-hook-form';

const SecondForm = (props) => {
  const { register, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(props.onSubmitSecondFormHandler)}>
          <input type="file" {...register('userPicture')} />
          <button>Submit</button>
        </form>
      )
}

export default SecondForm;