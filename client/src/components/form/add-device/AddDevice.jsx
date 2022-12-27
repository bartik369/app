import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import SubmitButton from "../../UI/buttons/SubmitButton";
import * as uiConstants from "../../../utils/constants/ui.constants";
import * as REGEX from "../../../utils/constants/regex.constants";

export default function AddDevice() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = () => {};

  return (
    <div className="main">
      <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="main-form__input">
          <input
            placeholder="constant device name"
            type="text"
            name="name"
            {...register("name", {
              required: "text error",
              pattern: {
                value: REGEX.isValidDisplayName,
                message: "message about error",
              },
            })}
          />
          <div className="form-error">
            {errors.name && <p>{errors.name.message || "Error"}</p>}
          </div>
        </div>

        <div className="main-form__input">
          <input
            placeholder="constant device number"
            type="text"
            name="number"
            {...register("number", {
              required: "text error",
              pattern: {
                value: REGEX.isValidDisplayName,
                message: "message about error",
              },
            })}
          />
          <div className="form-error">
            {errors.number && <p>{errors.number.message || "Error"}</p>}
          </div>
        </div>

        <div className="main-form__input">
          <input
            placeholder="constant user"
            type="text"
            name="user"
            {...register("user", {
              required: "text error",
              pattern: {
                value: REGEX.isValidDisplayName,
                message: "message about error",
              },
            })}
          />
          <div className="form-error">
            {errors.user && <p>{errors.user.message || "Error"}</p>}
          </div>
        </div>


        <SubmitButton title={uiConstants.titleAdd} />
      </form>
    </div>
  );
}