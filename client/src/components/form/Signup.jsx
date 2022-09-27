import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Login.css";
import useSignup from '../../hooks/useSignup';
import validateAuth from '../validate/validateAuth.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

export default function Signup() {
    
    const {signupHandler, signup, errors} = useSignup(validateAuth);


  return (
    <div className="main">
        <div className="login">
        <div className="login-sidebar">
           
        </div>
            <form className="login-form" action="" onSubmit={signup}>
            <div className="title">Регистрация</div>
                <label className="login-form__label" for='email'>Почта</label>
                <div className="input__inner">
                <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                <input className={errors.email ? "validation-error" : "login-form__input"}
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
                <label className="login-form__label" for="password">Пароль</label>
                <div className="input__inner">
                <FontAwesomeIcon icon={faLock} className="input-icon" />
                <input className={errors.password ? "validation-error" : "login-form__input"}
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
                <label className="login-form__label" for="confirmPassword">Подтвердите пароль</label>
                <div className="input__inner">
                <FontAwesomeIcon icon={faLock} className="input-icon" />
                <input className={errors.confirmPassword ? "validation-error" : "login-form__input"}
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
