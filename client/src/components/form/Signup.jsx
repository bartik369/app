import React from 'react';
import { Link } from "react-router-dom";
import "./Login.css";
import useSignup from '../../hooks/useSignup';
import validateAuth from '../validate/validateAuth.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

export default function Signup() {
    
    const {signupHandler, signup, errors, signupData} = useSignup(validateAuth);


  return (
    <div className="main">
        <div className="login">
        <div className="signup-sidebar"></div>
            <form className="login-form" action="" onSubmit={signup}>
            <div className="login-form__title">Регистрация</div>
                <label className="login-form__label" for='email'>Почта</label>
                <div className="login-form__input">
                <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                <input className={errors.email ? "validation-error" : ""}
                type='text' 
                id='email'
                name='email'
                placeholder='Укажите свою почту'
                onChange={signupHandler}
                value={signupData.email}
                />
                </div>
                <div className="login-form__error">
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <label className="login-form__label" for="password">Пароль</label>
                <div className="login-form__input">
                <FontAwesomeIcon icon={faLock} className="input-icon" />
                <input className={errors.password ? "validation-error" : ""}
                type='password'
                id='password'
                name='password'
                placeholder='Ваш пароль'
                onChange={signupHandler}
                value={signupData.password}
                />
                </div>
                <div className="login-form__error">
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <label className="login-form__label" for="confirmPassword">Подтвердите пароль</label>
                <div className="login-form__input">
                <FontAwesomeIcon icon={faLock} className="input-icon" />
                <input className={errors.confirmPassword ? "validation-error" : ""}
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                placeholder='Повторите пароль'
                onChange={signupHandler}
                value={signupData.confirmPassword}
                />
                </div>
                <div className="login-form__error">
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                </div>
                <div className="restore-password"><Link to="#">Забыли пароль?</Link></div>
                <button className="login-btn" type='submit'>Отправить</button>
                <div className="form-link ">Уже есть аккаунт? <Link to="#">Войти</Link></div>
            </form>
        </div>
    </div>
  )
};
