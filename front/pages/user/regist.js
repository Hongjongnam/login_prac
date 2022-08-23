import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAccount from '../../hooks/useAccount';

function Regist() {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const { account } = useAccount();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log('data', data);
    const valid = {
      email,
      nickname,
      account,
    };
    const result = await axios.post('http://localhost:4000/user/regist', valid);
    console.log(result.data.error);
    if (result.data.error == false) {
      alert('가입완료');
      window.location.href = 'http://localhost:3000';
    }
  };

  // const onChange = async (e) => {
  //   const valid = e.target.value;
  //   console.log(e.target.value);

  //   console.log(result.data);
  // };
  console.log(watch());
  return (
    <div className="regist">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label className="email_label">Email</label>

        <input
          className="email_input"
          placeholder="ex) jongs2741@gmail.com"
          {...register('email', {
            required: true,
            pattern: /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i,
          })}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        {errors.email && <p className="valid">Email 형식에 맞게 써줘</p>}

        <label className="nickname_label">Nickname</label>
        <input
          className="nickname_input"
          placeholder="ex) 나는최강"
          {...register('nickname', { required: true, minLength: 2 })}
          onChange={(e) => {
            setNickname(e.target.value);
          }}
          value={nickname}
        />

        {errors.nickname && errors.nickname.type === 'required' && <p className="valid">빈칸은 안돼</p>}

        {errors.nickname && errors.nickname.type === 'minLength' && <p className="valid"> 최소 두글자는 적어야 돼</p>}

        <label className="nickname_label">Your Account</label>

        <input
          disabled
          className="account_input"
          defaultValue={account}

          //   {...register('nickname', { required: true, minLength: 2 })}
        />
        <br />
        <br />
        <br />
        <input className="submit_input" type="submit" />
      </form>
    </div>
  );
}

export default Regist;
