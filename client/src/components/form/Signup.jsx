import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Login.css";
import useSignup from '../../hooks/useSignup';
import validateAuth from '../validate/validateAuth.js'
import Auth from "../../assets/portal/auth.jpeg"

export default function Signup() {
    
    
    const {signupHandler, signup, errors} = useSignup(validateAuth);


  return (
    <div className="login">
        <div className="login-form">
        <div className="l">
            <img src={Auth} alt="" />
        </div>
            <form className="form" action="" onSubmit={signup}>
            <div className="title">Регистрация</div>
                <label for='email'>Почта</label>
                <div className="input__inner">
                <i className="bi bi-envelope-open-fill"></i>
                <input className={errors.email ? "validation-error" : ""}
                type='text' 
                id='email'
                name='email'
                placeholder='Укажите свою почту'
                onChange={signupHandler}
                />
                </div>
                <div className="form-error">
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <label for="password">Пароль</label>
                <div className="input__inner">
                <i className="bi bi-lock-fill"></i>
                <input className={errors.password ? "validation-error" : ""}
                type='password'
                id='password'
                name='password'
                placeholder='Ваш пароль'
                onChange={signupHandler}
                />
                </div>
                <div className="form-error">
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <label for="confirmPassword">Подтвердить пароль</label>
                <div className="input__inner">
                <i className="bi bi-lock-fill"></i>
                <input className={errors.confirmPassword ? "validation-error" : ""}
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                placeholder='Повторите пароль'
                onChange={signupHandler}
                />
                </div>
                <div className="form-error">
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                </div>
                <button className="login-btn" type='submit'>Отправить</button>
                <span>Уже есть аккаунт? <Link to="#">Войти</Link> </span>
            </form>
        </div>
    </div>
  )
};
