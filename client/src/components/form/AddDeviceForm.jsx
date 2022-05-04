import React, { useState, useEffect } from "react";
import { useHistory, useLocaion, useParams } from "react-router-dom";
import FormInput from "./FormInput";
import Axios from "axios";

const AddDeviceForm = ({ create, updateInfo }) => {
  const [device, setDevice] = useState({
    id: "",
    deviceType: "",
    deviceName: "",
    deviceNumber: "",
    userName: "",
    deviceAddTime: "",
  });


  const [editDevice, setEditDevice] = useState({
    isEdit: false,
    deviceIndex: null,
  });

  const handleUpdate = async (id) => {
    const response = await Axios.put(`http://localhost:5001/device/${id}`);
    if (response) {
      setDevice(response.data);
      setEditDevice({
        isEdit: true,
        deviceIndex: id,
      });
    }
  };

  const addNewDevice = (e) => {
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
        name="deviceType"
        id="deviceType"
        onChange={(e) => setDevice({ ...device, deviceType: e.target.value })}
      />
      <FormInput
        placeholder="Название устройства"
        type="text"
        value={device.deviceName}
        name="deviceName"
        id="deviceName"
        onChange={(e) => setDevice({ ...device, deviceName: e.target.value })}
      />
      <FormInput
        placeholder="Номер устройства"
        type="text"
        value={device.deviceNumber}
        name="deviceNumber"
        id="deviceNumber"
        onChange={(e) => setDevice({ ...device, deviceNumber: e.target.value })}
      />
      <FormInput
        placeholder="Имя пользователя"
        type="text"
        value={device.userName}
        name="userName"
        id="userName"
        onChange={(e) => setDevice({ ...device, userName: e.target.value })}
      />
      <button className="add-btn" onClick={addNewDevice}>
        Добавить
      </button>
    </form>
  );
};

export default AddDeviceForm;
