import React, { useState } from "react";
import FormInput from "../UI/input/FormInput";

const AddDeviceForm = ({create}) => {
  const[device, setDevice] = useState(
    {     
      deviceName: '',
      deviceNumber: '',
      userName: '',
    },
  );  

  const addNewDevice = (event) => {
    event.preventDefault()
    const newDevice = {
        ...device,
        id: Date.now(),
    }
    create(newDevice);
  }

  return (
    <form>
      <FormInput
        placeholder="Название устройства"
        type='text'
        value={device.deviceName}
        onChange={(e) => setDevice({...device, deviceName: e.target.value})}
      />
      <FormInput
        placeholder="Номер устройства"
        type='text'
        value={device.deviceNumber}
        onChange={(e) => setDevice({ ...device, deviceNumber: e.target.value })}
      />
      <FormInput
        placeholder="Имя пользователя"
        type='text'
        value={device.userName}
        onChange={(e) => setDevice({ ...device, userName: e.target.value })}
      />
      <button onClick={addNewDevice}>Добавить</button>
    </form>
  );
};

export default AddDeviceForm;
