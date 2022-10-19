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
  } = useForm();

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
                {...register("email", {
                  required: "Please, add your email",
                })}
              />
            </div>
            <div className="form-error">
              {errors?.email && <p>{errors?.email?.message || "Error"}</p>}
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
                })}
              />
            </div>
            <div className="form-error">
                {errors?.password && (
                  <p>{errors?.password?.message || "Error"}</p>
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
            </div>
            <div className="form-error">
                {errors?.confirmPassword && (
                  <p>{errors?.confirmPassword?.message || "Error"}</p>
                )}
              </div>
          </div>

          <button className="login-btn" type="submit">
            Войти
          </button>
        </form>
      </div>
    </div>

    // <div className="main">
    // <div className="login">
    // <div className="signup-sidebar"></div>
    //     <form className="login-form" action="">
    //     <div className="login-form__title">Регистрация</div>
    //         <label className="login-form__label" for='email'>Почта</label>
    //         <div className="login-form__input">
    //         <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
    //         <input
    //         type='text'
    //         id='email'
    //         name='email'
    //         placeholder='Укажите свою почту'
    //         />
    //         </div>
    //         <div className="login-form__error">
    //         </div>
    //         <label className="login-form__label" for="password">Пароль</label>
    //         <div className="login-form__input">
    //         <FontAwesomeIcon icon={faLock} className="input-icon" />
    //         <input
    //         type='password'
    //         id='password'
    //         name='password'
    //         placeholder='Ваш пароль'
    //         />
    //         </div>
    //         <div className="login-form__error">

    //         </div>
    //         <label className="login-form__label" for="confirmPassword">Подтвердите пароль</label>
    //         <div className="login-form__input">
    //         <FontAwesomeIcon icon={faLock} className="input-icon" />
    //         <input
    //         type='password'
    //         id='confirmPassword'
    //         name='confirmPassword'
    //         placeholder='Повторите пароль'
    //         />
    //         </div>
    //         <div className="login-form__error">
    //         </div>
    //         <div className="restore-password"><Link to="#">Забыли пароль?</Link></div>
    //         <button className="login-btn" type='submit'>Отправить</button>
    //         <div className="form-link ">Уже есть аккаунт? <Link to="#">Войти</Link></div>
    //     </form>
    // </div>
    // </div>
  );
}
