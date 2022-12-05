import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, CleanMessages } from "../../../store/actions/usersActions";
import * as REGEX from "../../../utils/constants/regex.constants";
import * as formConstants from "../../../utils/constants/form.constants";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../Login.css";

export default function Login({ selectSignupForm }) {
  
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
    setError,
  } = useForm({
    mode: "onBlur",
  });

  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.messages);
  const navigate = useNavigate();

  useEffect(() => {
    messages.map((item) => {
      if (item.email) {
        setError("email", { type: "email", message: item.email });
      } else if (item.password) {
        setError("password", { type: "password", message: item.password });
      }
    });
  }, [messages]);

  const password = useRef({});
  password.current = watch("password", "");


  const onSubmit = (data) => {
    const userLoginData = {
      ...userInfo,
      email: data.email,
      password: data.password,
    };
    setUserInfo(userLoginData);
    setUserInfo(userLoginData);
    dispatch(loginUser(userLoginData, navigate));
  };


  const showPassword = (e) => {
    e.preventDefault();
    setPasswordType(passwordType ? false : true);
  };

  console.log("check memory");

  return (
    <div className="main">
      <div className="login">
        <div className="login-sidebar"></div>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="login-form__title">{formConstants.titleLogin}</div>

          <div className="input-layer">
            <div className="login-form__input">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
              <input
                placeholder={formConstants.yourEmail}
                type="text"
                name="email"
                {...register("email", {
                  required: formConstants.fillEmail,
                  pattern: {
                    value: REGEX.isValidEmail,
                    message: formConstants.wrongEmailFormat,
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
                placeholder={formConstants.yourPassword}
                type={passwordType ? "text" : "password"}
                {...register("password", {
                  required: formConstants.fillPassword,
                  pattern: {
                    value: REGEX.isValidPassword,
                    message: formConstants.onlyLatinCharacters,
                  },
                })}
              />
              <button className="show-password" onClick={showPassword}>
                {passwordType ? (
                  <i
                    className="bi bi-eye-slash"
                    title={formConstants.hidePassword}
                  ></i>
                ) : (
                  <i
                    className="bi bi-eye"
                    title={formConstants.openPassword}
                  ></i>
                )}
              </button>
            </div>
            <div className="form-error">
              {errors.password && <p>{errors.password.message || "Error"}</p>}
            </div>
          </div>

          <div className="restore-password">
            <Link to="#">{formConstants.forgotPassword}</Link>
          </div>
          <button className="login-btn" type="submit">
            {formConstants.send}
          </button>
          <div className="signin">
            {formConstants.accountNotExist}
            <Link to="#" onClick={() => {
              selectSignupForm();
              dispatch(CleanMessages());
            }}>
              {formConstants.register}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
