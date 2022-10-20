import React, { useRef } from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

export default function Signup() {
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


  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="main">
      <div className="login">
        <div className="signup-sidebar"></div>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="login-form__title">Регистрация</div>
          <div className="test-layer">
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
                    message: "Неправильный формат почты"
                  }
                })}
              />
            </div>
            <div className="form-error">
              {errors.email && <p>{errors.email.message || "Error"}</p>}
            </div>
          </div>

          <div className="test-layer">
            <div className="login-form__input">
              <FontAwesomeIcon icon={faLock} className="input-icon" />
              <input
                placeholder="Пароль"
                type="password"
                {...register("password", {
                  required: "Укажите, пожалуйста, пароль",
                  minLength: {
                    value: 7,
                    message: "Пароль должен быть минимум 7 символов",
                  },
                  pattern: {
                    value: isValidPassword,
                    message: "Только латинские буквы",
                  }
                })}
              />
              <i className="bi bi-eye"></i>
            </div>
            <div className="form-error">
                {errors.password && (
                  <p>{errors.password.message || "Error"}</p>
                )}
              </div>
          </div>

          <div className="test-layer">
            <div className="login-form__input">
              <FontAwesomeIcon icon={faLock} className="input-icon" />
              <input
                placeholder="Повторите пароль"
                type="password"
                {...register("confirmPassword", {
                  required: "Укажите, пожалуйста, пароль",
                  validate: (value) =>
                    value === password.current || "Пароли не совпадают",
                })}
              />
              <i className="bi bi-eye"></i>
            </div>
            <div className="form-error">
                {errors.confirmPassword && (
                  <p>{errors.confirmPassword.message || "Error"}</p>
                )}
              </div>
          </div>

          <button className="login-btn" type="submit">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}
