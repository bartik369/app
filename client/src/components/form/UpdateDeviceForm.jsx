import Axios from "axios";
import React, { useState, useEffect } from "react";
import FormInput from "./FormInput";

const UpdateDeviceForm = ({ updateInfo, modal, devices, setDevices }) => {
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
      deviceAddTime: deviceTime,
    };
    updateDevice(updateDeviceData);

    const popOut = () => {
      modal(false)
    }
    setTimeout(popOut, 1000);
  };

  function updateDevice(updateDeviceData) {
    const {_id,  deviceType, deviceName, deviceNumber, userName, deviceAddTime } = updateDeviceData;
    Axios.put(`http://localhost:5001/device/${_id}`, {
      id: _id,
      deviceType: deviceType,
      deviceName: deviceName,
      deviceNumber: deviceNumber,
      userName: userName,
      deviceAddTime: deviceAddTime,
    }).then((response) => {
      
      const indexOfChangedItem = devices.findIndex((item) => 
      item._id === response.data.id
      );
      const newArray = [...devices];
      newArray[indexOfChangedItem] = response.data;
      setDevices(newArray)
    })
  }

  return (
    <form className="add-device-form">
      <FormInput
        placeholder="Тип устройства"
        type="text"
        value={editDevice.deviceType}
        name="deviceType"
        onChange={(e) =>
          setEditDevice({ ...editDevice, deviceType: e.target.value })
        }
      />
      <FormInput
        placeholder="Название устройства"
        type="text"
        value={editDevice.deviceName}
        name="deviceName"
        onChange={(e) =>
          setEditDevice({ ...editDevice, deviceName: e.target.value })
        }
      />
      <FormInput
        placeholder="Номер устройства"
        type="text"
        value={editDevice.deviceNumber}
        name="deviceNumber"
        onChange={(e) =>
          setEditDevice({ ...editDevice, deviceNumber: e.target.value })
        }
      />
      <FormInput
        placeholder="Имя пользователя"
        type="text"
        value={editDevice.userName}
        name="userName"
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
