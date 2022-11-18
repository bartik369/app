import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import  {loginUser} from "../../../store/actions/usersActions"
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import "../Login.css";

export default function Login({selectSignupForm, loginHandler}) {

  const [passwordType, setPasswordType] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    mode: "onBlur",
  });

  const isValidEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  const isValidPassword = /[A-Za-z0-9]/;

  
  const password = useRef({});
  password.current = watch("password", "");

  const dispatch = useDispatch();


  const onSubmit = (data) => {
    console.log(data);
    const userLoginData = {
      ...userInfo,
      email: data.email,
      password: data.password,
    };
    setUserInfo(userLoginData);
    dispatch(loginUser(userLoginData))
    console.log("user Data", userInfo)
    // loginHandler();
  };

  const showPassword = (e) => {
    e.preventDefault();
    setPasswordType(passwordType ? false : true)
  }


  console.log("dfsfsfsfs")

  return (
    <div className="main">
      <div className="login">
        <div className="login-sidebar"></div>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="login-form__title">Войти в систему</div>

          <div className="input-layer">
            <div className="login-form__input">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
              <input
                placeholder="Почта"
                type="text"
                name="email"
                {...register("email", {
                  required: "Укажите, пожалуйста, email",
                  pattern: {
                    value: isValidEmail,
                    message: "Неправильный формат почты",
                  },
                })}
              />
            </div>
            <div className="form-error">
              {errors.email && <p>{errors.email.message || "Error"}</p>}
            </div>
          </div>

          <div className="input-layer">
            <div className="login-form__input">
              <FontAwesomeIcon icon={faLock} className="input-icon" />
              <input
                placeholder="Пароль"
                type={passwordType ? "text" : "password"}
                {...register("password", {
                  required: "Укажите, пожалуйста, пароль",
                  pattern: {
                    value: isValidPassword,
                    message: "Только латинские буквы",
                  },
                })}
              />
              <button className="show-password" onClick={showPassword}>
                {passwordType ? (
                  <i className="bi bi-eye-slash" title="Скрыть пароль"></i>
                ) : (
                  <i className="bi bi-eye" title="Показать пароль"></i>
                )}
              </button>
            </div>
            <div className="form-error">
              {errors.password && <p>{errors.password.message || "Error"}</p>}
            </div>
          </div>

          <div className="restore-password">
            <Link to="#">Забыли пароль?</Link>
          </div>
          <button className="login-btn" type="submit">
            Отправить
          </button>
          <div className="signin">
            Нет аккаунта? <Link to="#" onClick={selectSignupForm}>Зарегистрироваться</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
