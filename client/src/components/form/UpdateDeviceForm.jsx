import Axios from "axios";
import React, { useState, useEffect } from "react";
import FormInput from "./FormInput";
import ENV from '../../env.config';

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
    Axios.put(`${ENV.HOSTNAME}device/${_id}`, {
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

  const deviceTypeArray = [
    {name: 'Компьютеры', value: 'pc'},
    {name: 'Сетевое оборудование', value: 'network'},
    {name: 'Принтеры', value: 'printers'},
    {name: 'Телефоны', value: 'phones'},
    {name: 'Аксессуары', value: 'accessories'},
  ];


  return (
    <form className="add-device-form">
       <select
      name="typeDevice" 
      id="typeDevice"
      value={editDevice.deviceType}
      onChange={(e) => setEditDevice({ ...editDevice, deviceType: e.target.value })}
      >
        <option value="" disabled="disabled">Тип устройства</option>
        {deviceTypeArray.map((item, index) => (
            <option key={index}>{item.name}</option>
        ))}
      </select>
      <FormInput
        placeholder="Название устройства"
        type="text"
        value={editDevice.deviceName}
        onChange={(e) =>
          setEditDevice({ ...editDevice, deviceName: e.target.value })
        }
      />
      <FormInput
        placeholder="Номер устройства"
        type="text"
        value={editDevice.deviceNumber}
        onChange={(e) =>
          setEditDevice({ ...editDevice, deviceNumber: e.target.value })
        }
      />
      <FormInput
        placeholder="Имя пользователя"
        type="text"
        value={editDevice.userName}
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
