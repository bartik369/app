import React from 'react';
import { Link } from "react-router-dom";
import "./Login.css";
import useLogin from '../../hooks/useLogin';
import validateLogin from '../validate/validateLogin.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

export default function Login() {

  const {loginHandler, login, errors} = useLogin(validateLogin);


  return (
    <div className="main">
      <div className="login">
       <div className="login-sidebar"></div>
        <form className="login-form" action="" onSubmit={login}>
        <div className="login-form__title">Авторизация</div>
            <label className="login-form__label" for="email">Почта</label>
            <div className="login-form__input">
            <input className={errors.email ? "validation-error" : ""}
            type="text" 
            id="email" 
            name='email'
            placeholder='Укажите свою почту'
            onChange={loginHandler}
            />
            </div>
             <div className="form-error">
                {errors.email && <p>{errors.email}</p>}
            </div>
            <label className="login-form__label" for="password">Пароль</label>
            <div className="login-form__input">
            <FontAwesomeIcon icon={faLock} className="input-icon" />
            <input className={errors.password ? "validation-error" : ""}
            type="password" 
            id="password"
            name='password'
            placeholder='Ваш пароль'
            onChange={loginHandler}
            />
            </div>
             <div className="form-error">
                {errors.password && <p>{errors.password}</p>}
            </div>
            <button className="login-btn" type='submit'>Войти</button>
            <div className="form-link">Нет аккаунта? <Link to="#">Зарегистрироваться</Link></div>
        </form>
        </div>
    </div>
  )
};
