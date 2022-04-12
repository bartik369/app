import React from "react";
import AddButton from "../UI/button/AddButton";
import FormInput from "../UI/input/FormInput";

const AddDeviceForm = (props) => {
  return (
    <form>
      <FormInput placeholder='Название устройства'/>
      <FormInput placeholder='Инвентарный номер'/>
      <FormInput placeholder='Имя пользователя'/>
      <AddButton>Добавить</AddButton>
    </form>
  );
};

export default AddDeviceForm;
