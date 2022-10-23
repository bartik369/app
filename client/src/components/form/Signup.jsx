import React, { useRef, useState } from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import "./Login.css";

export default function Signup() {

  const [passwordType, setPasswordType] = useState(false);
  const [repeatPasswordType, setRepeatPasswordType] = useState(false);

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
  const isValidDisplayName = /[A-Za-z0-9]/;

  
  const password = useRef({});
  password.current = watch("password", "");


  const onSubmit = (data) => {
    console.log(data);
  };

  const showPassword = (e) => {
    e.preventDefault();
    setPasswordType(passwordType ? false : true)
  }
  const showConfirmPassword = (e) => {
    e.preventDefault();
    setRepeatPasswordType(repeatPasswordType ? false : true)
  }


  console.log("dfsfsfsfs")

  return (
    <div className="main">
      <div className="login">
        <div className="signup-sidebar"></div>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="login-form__title">Регистрация</div>

          <div className="input-layer">
            <div className="login-form__input">
              <FontAwesomeIcon icon={faUser} className="input-icon" />
              <input
                placeholder="Ваше имя"
                type="text"
                name="displayname"
                {...register("displayname", {
                  required: "Укажите, пожалуйста, Ваше имя",
                  pattern: {
                    value: isValidDisplayName,
                    message: "Неправильный формат имени",
                  },
                })}
              />
            </div>
            <div className="form-error">
              {errors.displayname && (
                <p>{errors.displayname.message || "Error"}</p>
              )}
            </div>
          </div>

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
                  minLength: {
                    value: 7,
                    message: "Пароль должен быть минимум 7 символов",
                  },
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

          <div className="input-layer">
            <div className="login-form__input">
              <FontAwesomeIcon icon={faLock} className="input-icon" />
              <input
                placeholder="Повторите пароль"
                type={repeatPasswordType ? "text" : "password"}
                {...register("confirmPassword", {
                  required: "Укажите, пожалуйста, пароль",
                  validate: (value) =>
                    value === password.current || "Пароли не совпадают",
                })}
              />
              <button className="show-password" onClick={showConfirmPassword}>
                {repeatPasswordType ? (
                  <i className="bi bi-eye-slash"></i>
                ) : (
                  <i className="bi bi-eye"></i>
                )}
              </button>
            </div>
            <div className="form-error">
              {errors.confirmPassword && (
                <p>{errors.confirmPassword.message || "Error"}</p>
              )}
            </div>
          </div>
          <div className="restore-password">
            <Link to="#">Забыли пароль?</Link>
          </div>
          <button className="login-btn" type="submit">
            Отправить
          </button>
          <div className="signin">
            Уже есть аккаунт? <Link to="#">Войти</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
