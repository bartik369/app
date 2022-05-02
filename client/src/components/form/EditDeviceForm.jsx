import React, { useState } from "react";
import FormInput from "./FormInput";

const EditDeviceForm = ({ update }) => {
  const [device, setDevice] = useState({
    id: "",
    deviceType: "",
    deviceName: "",
    deviceNumber: "",
    userName: "",
    deviceAddTime: "",
  });

  return (
    <form className="add-device-form">
      <FormInput
        placeholder="Тип устройства"
        type="text"
        value={device.deviceType}
        onChange={(e) => setDevice({ ...device, deviceType: e.target.value })}
      />
      <FormInput
        placeholder="Название устройства"
        type="text"
        value={device.deviceName}
        onChange={(e) => setDevice({ ...device, deviceName: e.target.value })}
      />
      <FormInput
        placeholder="Номер устройства"
        type="text"
        value={device.deviceNumber}
        onChange={(e) => setDevice({ ...device, deviceNumber: e.target.value })}
      />
      <FormInput
        placeholder="Имя пользователя"
        type="text"
        value={device.userName}
        onChange={(e) => setDevice({ ...device, userName: e.target.value })}
      />
      <button className="add-btn" onClick={addNewDevice}>
        Обновить
      </button>

    </form>
  );
};

export default EditDeviceForm;
