import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAccount from '../../hooks/useAccount';

function Regist() {
  const { account } = useAccount();
  const [email, setEmail] = useState('');
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log('data', data);
    const loginCheck = {
      email,
      account,
    };
    const result = await axios.post('http://localhost:4000/user/login', loginCheck);
    console.log('이거봐', result.data);
  };

  //   const onChange = async (e) => {
  //     const valid = e.target.value;
  //     console.log(e.target.value);
  //     const result = await axios.post('http://localhost:4000/user/login', null);

  //     console.log(result.data);
  //   };

  return (
    <div className="regist">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label className="email_label">Email</label>

        <input
          className="email_input"
          placeholder="ex) jongs2741@gmail.com"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {errors.email && <p className="valid">Please in email format</p>}

        {/* include validation with required or other standard HTML validation rules */}
        <label className="nickname_label">Your Account</label>
        <input
          background="white"
          disabled
          className="nickname_input"
          defaultValue={account}
          //   {...register('nickname', { required: true, minLength: 2 })}
        />
        {/* errors will return when field validation fails  */}
        {errors.nickname && errors.nickname.type === 'required' && <p className="valid">This field is required</p>}

        {errors.nickname && errors.nickname.type === 'minLength' && (
          <p className="valid"> Nickname must have at least 2 characters</p>
        )}
        <br />
        <br />
        <br />

        <input className="submit_input" type="submit" />
      </form>
    </div>
  );
}

export default Regist;
