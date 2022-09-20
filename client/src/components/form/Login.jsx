import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Login.css";
import useLogin from '../../hooks/useLogin';

export default function Login() {

    const {loginHandler, loginData, handleSubmit} = useLogin();

  return (
    <div className="login">
        <form className="form" action="" onSubmit={handleSubmit}>
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
            <label for="password">Пароль</label>
            <input 
            type="password" 
            id="password"
            name='password'
            placeholder='Ваш пароль'
            value={loginData.password || ""}
            onChange={loginHandler}
            />
            <button className="login-btn" type='submit'>Войти</button>
            <span>Нет аккаунта? <Link to="#">Зарегистрироваться</Link> </span>
        </form>
    </div>
  )
};
