import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Login.css"

export default function Signup() {

    const [signupInfo, setSignupInfo] = useState({
        email: "",
        password: "",
    });

    const signupHandler = (e) => {
        const {name, value} = e.target;
        setSignupInfo({...signupInfo, [name]: value})
    };

    const signup = (e) => {
        e.preventDefault();
    };


  return (
    <div className="login">
        <div className="form" action="">
        <div className="title">Регистрация</div>
            <label for="email">Почта</label>
            <input 
            type="text" 
            id="email" 
            name='email'
            placeholder='Укажите свою почту'
            onChange={(e) => signupHandler(e)}
            />
            <label for="password">Пароль</label>
            <input 
            type="password" 
            id="password"
            name='password'
            placeholder='Ваш пароль'
            onChange={(e) => signupHandler(e)}
            />
            <label for="confirmPassword">Подтвердить пароль</label>
            <input 
            type="password" 
            id='confirmPassword'
            name='confirmPassword'
            placeholder='Повторите пароль'
            onChange={(e) => signupHandler(e)}
            />
            <button className="login-btn" type='submit' onClick={(e) => signup(e) }>Отправить</button>
            <span>Уже есть аккаунт? <Link to="#">Войти</Link> </span>
        </div>
    </div>
  )
};
