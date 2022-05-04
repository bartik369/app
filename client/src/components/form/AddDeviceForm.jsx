import React, { useState, useEffect } from "react";
import { useHistory, useLocaion, useParams } from "react-router-dom";
import FormInput from "./FormInput";
import Axios from "axios";

const AddDeviceForm = ({ create, updateInfo }) => {
  // const [device, setDevice] = useState({
  //   id: "",
  //   deviceType: "",
  //   deviceName: "",
  //   deviceNumber: "",
  //   userName: "",
  //   deviceAddTime: "",
  // });

  const [editDevice, setEditDevice] = useState({});

  useEffect(() => {
    setEditDevice(updateInfo);
  },[updateInfo])

  
  // Add new device

  // const addNewDevice = (e) => {
  //   e.preventDefault();
  //   const date = new Date();
  //   const deviceTime =
  //     date.toLocaleDateString() + " " + date.toLocaleTimeString("en-GB");
  //   const newDevice = {
  //     ...device,
  //     id: Date.now(),
  //     deviceAddTime: deviceTime,
  //   };
  //   create(newDevice);
  //   setDevice({
  //     id: "",
  //     deviceType: "",
  //     deviceName: "",
  //     deviceNumber: "",
  //     userName: "",
  //   });
  // };


  return (
    <form className="add-device-form">
      <FormInput
        placeholder="Тип устройства"
        type="text"
        value={editDevice.deviceType}
        name="deviceType"
        id="deviceType"
        onChange={(e) => setEditDevice({ ...editDevice, deviceType: e.target.value })}
      />
      <FormInput
        placeholder="Название устройства"
        type="text"
        value={editDevice.deviceName}
        name="deviceName"
        id="deviceName"
        onChange={(e) => setEditDevice({ ...editDevice, deviceName: e.target.value })}
      />
      <FormInput
        placeholder="Номер устройства"
        type="text"
        value={editDevice.deviceNumber}
        name="deviceNumber"
        id="deviceNumber"
        onChange={(e) => setEditDevice({ ...editDevice, deviceNumber: e.target.value })}
      />
      <FormInput
        placeholder="Имя пользователя"
        type="text"
        value={editDevice.userName}
        name="userName"
        id="userName"
        onChange={(e) => setEditDevice({ ...editDevice, userName: e.target.value })}
      />
      <button className="add-btn">
        Добавить
      </button>
    </form>
  );
};

export default AddDeviceForm;
