import Axios from "axios";
import React, { useState, useEffect } from "react";
import FormInput from "./FormInput";

const UpdateDeviceForm = ({ updateInfo }) => {
  const [editDevice, setEditDevice] = useState({
    id: "",
    deviceType: "",
    deviceName: "",
    deviceNumber: "",
    userName: "",
    deviceAddTime: "",
  });

  useEffect(() => {
    setEditDevice(updateInfo);
  }, [updateInfo]);

  const handleUpdateDevice = (e) => {
    e.preventDefault();
    const date = new Date();
    const deviceTime =
      date.toLocaleDateString() + " " + date.toLocaleTimeString("en-GB");
    const updateDeviceData = {
      ...editDevice,
      id: Date.now(),
      deviceAddTime: deviceTime,
    };
    updateDevice(updateDeviceData);
  };

  function updateDevice(updateDeviceData) {
    const { deviceType, deviceName, deviceNumber, userName, deviceAddTime } = updateDeviceData;
    Axios.put(`http://localhost:5001/device/:id`, {
      deviceType: deviceType,
      deviceName: deviceName,
      deviceNumber: deviceNumber,
      userName: userName,
      deviceAddTime: deviceAddTime,
    });
  }

  return (
    <form className="add-device-form">
      <FormInput
        placeholder="Тип устройства"
        type="text"
        value={editDevice.deviceType}
        name="deviceType"
        id="deviceType"
        onChange={(e) =>
          setEditDevice({ ...editDevice, deviceType: e.target.value })
        }
      />
      <FormInput
        placeholder="Название устройства"
        type="text"
        value={editDevice.deviceName}
        name="deviceName"
        id="deviceName"
        onChange={(e) =>
          setEditDevice({ ...editDevice, deviceName: e.target.value })
        }
      />
      <FormInput
        placeholder="Номер устройства"
        type="text"
        value={editDevice.deviceNumber}
        name="deviceNumber"
        id="deviceNumber"
        onChange={(e) =>
          setEditDevice({ ...editDevice, deviceNumber: e.target.value })
        }
      />
      <FormInput
        placeholder="Имя пользователя"
        type="text"
        value={editDevice.userName}
        name="userName"
        id="userName"
        onChange={(e) =>
          setEditDevice({ ...editDevice, userName: e.target.value })
        }
      />
      <button className="add-btn" onClick={(e) => handleUpdateDevice(e)}>
        Обновить
      </button>
    </form>
  );
};

export default UpdateDeviceForm;
