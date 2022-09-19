import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Login.css"

export default function Login() {

    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
    });

    const loginHandler = (e) => {
        const {name, value} = e.target;
        setLoginInfo({...loginInfo, [name]: value})
    };

    const login = (e) => {
        e.preventDefault();
    };


  return (
    <div className="login">
        <div className="form" action="">
        <div className="title">Авторизация</div>
            <label for="email">Почта</label>
            <input 
            type="text" 
            id="email" 
            name='email'
            placeholder='Укажите свою почту'
            onChange={(e) => loginHandler(e)}
            />
            <label for="password">Пароль</label>
            <input 
            type="password" 
            id="password"
            name='password'
            placeholder='Ваш пароль'
            onChange={(e) => loginHandler(e)}
            />
            <button className="login-btn" type='submit' onClick={(e) => login(e) }>Войти</button>
            <span>Нет аккаунта? <Link to="#">Зарегистрироваться</Link> </span>
        </div>
    </div>
  )
};
