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


  const deviceTypeArray = [
    {name: 'Компьютеры', value: 'pc'},
    {name: 'Сетевое оборудование', value: 'network'},
    {name: 'Принтеры', value: 'printers'},
    {name: 'Телефоны', value: 'phones'},
    {name: 'Аксессуары', value: 'accessories'},
  ];

  // Add new device

  const handleAddDevice = (e) => {
    e.preventDefault();
    const date = new Date();
    const deviceTime =
      date.toLocaleDateString() + " " + date.toLocaleTimeString("ru-RU");
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
      <select
      defaultValue=""
      name="typeDevice" 
      id="typeDevice"
      onChange={(e) => setDevice({ ...device, deviceType: e.target.value })}
      >
        <option value="" disabled>Тип устройства</option>
        {deviceTypeArray.map((item, index) => (
            <option key={index}>{item.name}</option>
        ))}
      </select>
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
      <button className="add-btn" onClick={(e) => handleAddDevice(e)}>
        Добавить
      </button>
    </form>
  );
};

export default AddDeviceForm;
