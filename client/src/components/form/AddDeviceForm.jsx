import React, { useState, useEffect } from "react";
import { useHistory, useLocaion, useParams } from "react-router-dom";
import FormInput from "./FormInput";

const AddDeviceForm = ({ create }) => {
  const [device, setDevice] = useState({
    id: "",
    deviceType: "",
    deviceName: "",
    deviceNumber: "",
    userName: "",
    deviceAddTime: "",
  });

  
  // Add new device

  const handleAddDevice = (e) => {
    e.preventDefault();
    const date = new Date();
    const deviceTime =
      date.toLocaleDateString() + " " + date.toLocaleTimeString("en-GB");
    const newDevice = {
      ...device,
      id: Date.now(),
      deviceAddTime: deviceTime,
    };
    create(newDevice);
    setDevice({
      id: "",
      deviceType: "",
      deviceName: "",
      deviceNumber: "",
      userName: "",
    });
  };


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
        // name="userName"
        // id="userName"
        onChange={(e) => setDevice({ ...device, userName: e.target.value })}
      />
      <button className="add-btn" onClick={(e) => handleAddDevice(e)}>
        Добавить
      </button>
    </form>
  );
};

export default AddDeviceForm;
