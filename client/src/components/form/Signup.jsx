import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Login.css"
import useLogin from '../../hooks/useLogin';
import validateAuth from '../validate/validateAuth.js'

export default function Signup() {
    
    
    const {signupHandler, signupData, signup, errors} = useLogin(validateAuth);


  return (
    <div className="login">
        <form className="form" action="" onSubmit={signup}>
        <div className="title">Регистрация</div>
            <label for='email'>Почта</label>
            <input 
            type='text' 
            id='email'
            name='email'
            placeholder='Укажите свою почту'
            value={signupData.email || ""}
            onChange={signupHandler}

            />
            <div className="form-error">
                {errors.email && <p>{errors.email}</p>}
            </div>
            <label for="password">Пароль</label>
            <input 
            type='password'
            id='password'
            name='password'
            placeholder='Ваш пароль'
            value={signupData.password || ""}
            onChange={signupHandler}

            />
            <div className="form-error">
                {errors.password && <p>{errors.password}</p>}
            </div>
            <label for="confirmPassword">Подтвердить пароль</label>
            <input 
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            placeholder='Повторите пароль'
            value={signupData.confirmPassword || ""}
            onChange={signupHandler}
         
            />
            <div className="form-error">
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
            </div>
            <button className="login-btn" type='submit'>Отправить</button>
            <span>Уже есть аккаунт? <Link to="#">Войти</Link> </span>
        </form>
    </div>
  )
};
