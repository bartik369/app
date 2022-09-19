import React, {useState, useEffect} from 'react';
import "./Registration.css"

export default function Registration() {

    const [registerInfo, setRegisterInfo] = useState({
        email: "",
        password: "",
    });

    const registrationHandler = (e) => {
        const {name, value} = e.target;
        setRegisterInfo({...registerInfo, [name]: value})
    };

    const registration = (e) => {
        e.preventDefault();
    };


  return (
    <div className="registration">
        <div className="form" action="">
        <div className="title">Регистрация</div>
            <input 
            type="text" 
            id="email" 
            name='email'
            placeholder='Укажите свою почту'
            onChange={(e) => registrationHandler(e)}
            />
            <input 
            type="password" 
            id="password"
            name='password'
            placeholder='Ваш пароль'
            onChange={(e) => registrationHandler(e)}
            />
            <input 
            type="password" 
            id='repeat-password'
            name='repeat-password'
            placeholder='Повторите пароль'
            onChange={(e) => registrationHandler(e)}
            />
            <button className="register-btn" onClick={(e) => registration(e) }>Отправить</button>
        </div>
    </div>
  )
};
