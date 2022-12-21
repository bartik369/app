import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateUserPassword } from "../../store/actions/usersActions";
import * as REGEX from "../../utils/constants/regex.constants";
import * as formConstants from "../../utils/constants/form.constants";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ResetPassword() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setError,
  } = useForm({
    mode: "onBlur",
  });

  const dispatch = useDispatch()

  const onSubmit = (data) => {
    console.log("chick chick")
    const resetPasswordData = {
        email: data.email,
    }
    dispatch(updateUserPassword(resetPasswordData, setError))
  }

  return (
    <div className="main">
      <div className="reset-password">
        <div className="reset-password-sidebar"></div>
        <form className="reset-password-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="reset-password-form__title">Reset password</div>
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
          <button className="reset-password-btn" type="submit">
          {formConstants.register}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
