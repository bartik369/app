import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import SubmitButton from "../../UI/buttons/SubmitButton";
import * as uiConstants from "../../../utils/constants/ui.constants";
import * as formConstants from "../../../utils/constants/form.constants"
import * as REGEX from "../../../utils/constants/regex.constants";

export default function AddDevice() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  
  const deviceTypeArray = [
    {name: 'Компьютеры', value: 'pc'},
    {name: 'Сетевое оборудование', value: 'network'},
    {name: 'Принтеры', value: 'printers'},
    {name: 'Телефоны', value: 'phones'},
    {name: 'Аксессуары', value: 'accessories'},
  ];

  const onSubmit = () => {
    
  };

  return (
    <div className="main">
      <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
      <select placeholder="Тип устройства"{...register("type")}>
        {deviceTypeArray.map((item) => {
          return <option value={item.value}/>
        })}
      </select>
        <div className="main-form__input">
          <input
            placeholder="constant device name"
            type="text"
            name="name"
            {...register("name", {
              required: formConstants.requiredText,
              pattern: {
                value: REGEX.isValidDisplayName,
                message: formConstants.wrongDeviceName,
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
              required: formConstants.requiredText,
              pattern: {
                value: REGEX.isValidDisplayName,
                message: formConstants.wrongDeviceNumber,
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
              required: formConstants.requiredText,
              pattern: {
                value: REGEX.isValidDisplayName,
                message: formConstants.wrongUserName,
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
