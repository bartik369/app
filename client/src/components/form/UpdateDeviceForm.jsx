import Axios from "axios";
import React, { useState, useEffect } from "react";
import FormInput from "./FormInput";
import ENV from '../../env.config';

const UpdateDeviceForm = ({ updateInfo, modal, devices, setDevices, fetchDevices }) => {
  const [editDevice, setEditDevice] = useState({
    id: "",
    type: "",
    name: "",
    number: "",
    user: "",
    addTime: "",
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
      id: editDevice._id,
      type: editDevice.type,
      name: editDevice.name,
      number: editDevice.number,
      user: editDevice.user,
      addTime: deviceTime,
    };
    updateDevice(updateDeviceData);
    const popOut = () => {
      modal(false)
    }
    setTimeout(popOut, 1000);
  };

  function updateDevice(updateDeviceData) {
    const {id,  type, name, number, user, addTime } = updateDeviceData;
    Axios.put(`${ENV.HOSTNAME}device/${id}`, {
      id: id,
      type: type,
      name: name,
      number: number,
      user: user,
      addTime: addTime,
    }).then((response) => {
      
      const indexOfChangedItem = devices.findIndex((item) => 
      item._id === response.data.id
      );
      const newArray = [...devices];
      newArray[indexOfChangedItem] = response.data;
      setDevices(newArray);
      fetchDevices();
    })
  }

  const deviceTypeArray = [
    {name: 'Компьютеры', value: 'pc'},
    {name: 'Сетевое оборудование', value: 'network'},
    {name: 'Принтеры', value: 'printers'},
    {name: 'Телефоны', value: 'phones'},
    {name: 'Аксессуары', value: 'accessories'},
  ];

  const handleChange = (e) => {
    const {name, value} = e.target;
    setEditDevice({...editDevice, [name]: value});
  }

  return (
    <form className="add-device-form">
       <select
      name="type" 
      id="typeDevice"
      value={editDevice.type}
      onChange={(e) => handleChange(e)}
      >
        <option value="" disabled="disabled">Тип устройства</option>
        {deviceTypeArray.map((item, index) => (
            <option key={index}>{item.name}</option>
        ))}
      </select>
      <FormInput
        placeholder="Название устройства"
        name="name"
        type="text"
        value={editDevice.name}
        onChange={(e) => handleChange(e)}
      />
      <FormInput
        placeholder="Номер устройства"
        name="number"
        type="text"
        value={editDevice.number}
        onChange={(e) => handleChange(e)}
      />
      <FormInput
        placeholder="Имя пользователя"
        name="user"
        type="text"
        value={editDevice.user}
        onChange={(e) => handleChange(e)}
      />
      <button className="add-btn" onClick={(e) => handleUpdateDevice(e)}>
        Обновить
      </button>
    </form>
  );
};

export default UpdateDeviceForm;
