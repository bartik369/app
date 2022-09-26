import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Login.css";
import useSignup from '../../hooks/useSignup';
import validateAuth from '../validate/validateAuth.js'
import Auth from "../../assets/portal/auth.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

export default function Signup() {
    
    const {signupHandler, signup, errors} = useSignup(validateAuth);


  return (
    <div className="login">
        <div className="login-form">
        <div className="login-sidebar">
            <img src={Auth} alt="" />
        </div>
            <form className="form" action="" onSubmit={signup}>
            <div className="title">Регистрация</div>
                <label for='email'>Почта</label>
                <div className="input__inner">
                <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
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
                <FontAwesomeIcon icon={faLock} className="input-icon" />
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
                <label for="confirmPassword">Подтвердите пароль</label>
                <div className="input__inner">
                <FontAwesomeIcon icon={faLock} className="input-icon" />
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
                <div className="restore-password"><Link to="#">Забыли пароль?</Link></div>
                <button className="login-btn" type='submit'>Отправить</button>
                <span className="login">Уже есть аккаунт? <Link to="#">Войти</Link> </span>
            </form>
        </div>
    </div>
  )
};
