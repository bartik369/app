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


  return (
    <form className="add-device-form">
       <select
      name="typeDevice" 
      id="typeDevice"
      value={editDevice.type}
      onChange={(e) => setEditDevice({ ...editDevice, type: e.target.value })}
      >
        <option value="" disabled="disabled">Тип устройства</option>
        {deviceTypeArray.map((item, index) => (
            <option key={index}>{item.name}</option>
        ))}
      </select>
      <FormInput
        placeholder="Название устройства"
        type="text"
        value={editDevice.name}
        onChange={(e) =>
          setEditDevice({ ...editDevice, name: e.target.value })
        }
      />
      <FormInput
        placeholder="Номер устройства"
        type="text"
        value={editDevice.number}
        onChange={(e) =>
          setEditDevice({ ...editDevice, number: e.target.value })
        }
      />
      <FormInput
        placeholder="Имя пользователя"
        type="text"
        value={editDevice.user}
        onChange={(e) =>
          setEditDevice({ ...editDevice, user: e.target.value })
        }
      />
      <button className="add-btn" onClick={(e) => handleUpdateDevice(e)}>
        Обновить
      </button>
    </form>
  );
};

export default UpdateDeviceForm;
