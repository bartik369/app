import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Login.css";
import useLogin from '../../hooks/useLogin';
import validateAuth from '../validate/validateAuth.js'

export default function Login() {

  const {loginHandler, loginData, login, errors} = useLogin(validateAuth);


  return (
    <div className="login">
        <form className="form" action="" onSubmit={login}>
        <div className="title">Авторизация</div>
            <label for="email">Почта</label>
            <input 
            type="text" 
            id="email" 
            name='email'
            placeholder='Укажите свою почту'
            value={loginData.email || ""}
            onChange={loginHandler}
            />
             <div className="form-error">
                {errors.email && <p>{errors.email}</p>}
            </div>
            <label for="password">Пароль</label>
            <input 
            type="password" 
            id="password"
            name='password'
            placeholder='Ваш пароль'
            value={loginData.password || ""}
            onChange={loginHandler}
            />
             <div className="form-error">
                {errors.password && <p>{errors.password}</p>}
            </div>
            <button className="login-btn" type='submit'>Войти</button>
            <span>Нет аккаунта? <Link to="#">Зарегистрироваться</Link> </span>
        </form>
    </div>
  )
};
