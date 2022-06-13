import React, { useState} from "react";
import FormInput from "./FormInput";

const AddDeviceForm = ({ create }) => {
  const [device, setDevice] = useState({
    id: "",
    type: "",
    name: "",
    number: "",
    user: "",
    addTime: "",
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
      addTime: deviceTime,
    };
    create(newDevice);
    setDevice({
      id: "",
      type: "",
      name: "",
      number: "",
      user: "",
    });
  };


  return (
    <form className="add-device-form">
      <select
      defaultValue=""
      name="typeDevice" 
      id="typeDevice"
      onChange={(e) => setDevice({ ...device, type: e.target.value })}
      >
        <option value="" disabled>Тип устройства</option>
        {deviceTypeArray.map((item, index) => (
            <option key={index}>{item.name}</option>
        ))}
      </select>
      <FormInput
        placeholder="Название устройства"
        type="text"
        value={device.name}
        onChange={(e) => setDevice({ ...device, name: e.target.value })}
      />
      <FormInput
        placeholder="Номер устройства"
        type="text"
        value={device.number}
        onChange={(e) => setDevice({ ...device, number: e.target.value })}
      />
      <FormInput
        placeholder="Имя пользователя"
        type="text"
        value={device.user}
        onChange={(e) => setDevice({ ...device, user: e.target.value })}
      />
      <button className="add-btn" onClick={(e) => handleAddDevice(e)}>
        Добавить
      </button>
    </form>
  );
};

export default AddDeviceForm;
