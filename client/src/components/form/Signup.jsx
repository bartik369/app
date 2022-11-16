import React, { useEffect, useRef, useState } from "react";
import { useDispatch} from "react-redux";
import { useSelector } from "react-redux"
import { createUser } from "../../store/actions/usersActions";
import { loadUsers } from "../../store/actions/usersActions";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { CSSTransition } from 'react-transition-group';
import "./Login.css";
import paperAirplane from "../../assets/portal/paper_airplane.png"

export default function Signup({selectLoginForm}) {

  const [passwordType, setPasswordType] = useState(false);
  const [repeatPasswordType, setRepeatPasswordType] = useState(false);
  const [animationPaperAirplane, setAnimationPaperAirplane] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [userInfo, setUserInfo] = useState({
    displayname: "",
    email: "",
    password: ""
  });

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
    watch,
    setError,
  } = useForm({
    mode: "onBlur",
  });

  const dispatch = useDispatch();
  const {users} = useSelector(state => state.users);

  const isValidEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  const isValidPassword = /[A-Za-z0-9]/;
  const isValidDisplayName = /[A-Za-z0-9]/;
  let searchUser;

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
        const newUser = {
          ...userInfo,
          displayname: data.displayname,
          email: data.email,
          password: data.password
        }
        searchUser = users.find((user) => user.email === data.email); 
        
        if (!searchUser) {
          setUserInfo(newUser)
          dispatch(createUser(newUser))
          setAnimationPaperAirplane(true)
          reset()
          setShowInfo(true);
          setTimeout(() => selectLoginForm(true), 9000)
        } else {
          setError("email", {type: "email", message: `Пользователь с почтой ${searchUser.email} уже существует`});
        }
  };

  const showPassword = (e) => {
    e.preventDefault();
    setPasswordType(passwordType ? false : true)
  }
  const showConfirmPassword = (e) => {
    e.preventDefault();
    setRepeatPasswordType(repeatPasswordType ? false : true)
  }

  console.log(users)

  return (
    <div className="main">
      <div className="login">
        <div className="signup-sidebar">
          <div className="signup-sidebar__info">
            <div className="login__notification">
              <CSSTransition
                in={animationPaperAirplane}
                timeout={1000}
                classNames="paperAirplane-animation"
              >
                <div className="paperAirplane">
                  <img src={paperAirplane} alt="" />
                </div>
              </CSSTransition>
              <div
                className={animationPaperAirplane ? "back-notification" : ""}
              >
                <div className={showInfo ? "completed" : "completion-registration"}>
                <div className="title">Подтверждние регистрации</div>
                <span>
                  На Вашу почту было отправлено письмо с ссылкой для активации
                  аккаунта.
                </span>
              </div>
              </div>
            </div>
          </div>
        </div>
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
                type="email"
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
                    value: 3,
                    message: "Пароль должен быть минимум 3 символов",
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
          <button className="login-btn" type="submit">
            Отправить
          </button>
          <div className="signin">
            Уже есть аккаунт?{" "}
            <Link to="#" onClick={selectLoginForm}>
              Войти
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
