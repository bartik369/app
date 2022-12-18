import React, {useRef, useState} from "react";
import { useForm } from "react-hook-form";
import * as REGEX from "../../../utils/constants/regex.constants";
import * as formConstants from "../../../utils/constants/form.constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export default function SetNewPassword() {
  const [passwordType, setPasswordType] = useState(false);
  const [repeatPasswordType, setRepeatPasswordType] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    watch,
  } = useForm({
    mode: "onBlur",
  });

  const password = useRef({});
  password.current = watch("password", "");

  const showPassword = (e) => {
    e.preventDefault();
    setPasswordType(passwordType ? false : true);
  };
  
  const showConfirmPassword = (e) => {
    e.preventDefault();
    setRepeatPasswordType(repeatPasswordType ? false : true);
  };

  const onSubmit = (data) => [

  ]

  return (
    <div className="main">
      <div className="set-password">
        <div className="set-password-sidebar"></div>
        <form className="set-password-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="set-password__title"></div>

          <div className="input-layer">
            <div className="set-password-form__input">
              <FontAwesomeIcon icon={faLock} className="input-icon" />
              <input
                placeholder={formConstants.yourPassword}
                type={passwordType ? "text" : "password"}
                {...register("password", {
                  required: formConstants.fillPassword,
                  minLength: {
                    value: 3,
                    message: formConstants.minSymbolsOfPassword,
                  },
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

          <div className="input-layer">
            <div className="set-password-form__input">
              <FontAwesomeIcon icon={faLock} className="input-icon" />
              <input
                placeholder={formConstants.repeatPassword}
                type={repeatPasswordType ? "text" : "password"}
                {...register("confirmPassword", {
                  required: formConstants.fillPassword,
                  validate: (value) =>
                    value === password.current ||
                    formConstants.passwordsDoNotMatch,
                })}
              />
              <button className="show-password" onClick={showConfirmPassword}>
                {repeatPasswordType ? (
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
              {errors.confirmPassword && (
                <p>{errors.confirmPassword.message || "Error"}</p>
              )}
            </div>
          </div>
          <button className="set-password-btn"></button>
        </form>
      </div>
    </div>
  );
}
