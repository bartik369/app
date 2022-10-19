import React from 'react';
import { Link } from "react-router-dom";
import "./Login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import {useForm} from 'react-hook-form';

export default function Login() {

  const {
    register,
    formState: {errors},
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="main">
      <div className="login">
       <div className="login-sidebar"></div>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <label className="login-form__label" for="email">Почта</label>
          <button className="login-btn" type='submit'>Войти</button>
        </form>
        </div>
    </div>




// <div className="main">
// <div className="login">
//  <div className="login-sidebar"></div>
//   <form className="login-form" action="">
//   <div className="login-form__title">Авторизация</div>
//       <label className="login-form__label" for="email">Почта</label>
//       <div className="login-form__input">
//       <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
//       <input
//       type="text" 
//       id="email" 
//       name='email'
//       placeholder='Укажите свою почту'
//       />
//       </div>
//        <div className="form-error">
        
//       </div>
//       <label className="login-form__label" for="password">Пароль</label>
//       <div className="login-form__input">
//       <FontAwesomeIcon icon={faLock} className="input-icon" />
//       <input
//       type="password" 
//       id="password"
//       name='password'
//       placeholder='Ваш пароль'
//       />
//       </div>
//        <div className="form-error">
          
//       </div>
//       <button className="login-btn" type='submit'>Войти</button>
//       <div className="form-link">Нет аккаунта? <Link to="#">Зарегистрироваться</Link></div>
//   </form>
//   </div>
// </div>
  )
};
