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

  const handleChange = (e) => {
    const {name, value} = e.target;
    setDevice({...device, [name]: value})
  }


  return (
    <form className="add-device-form">
      <select
      defaultValue=""
      name="type" 
      id="typeDevice"
      onChange={(e) => handleChange(e)}
      >
        <option value="" disabled>Тип устройства</option>
        {deviceTypeArray.map((item, index) => (
            <option key={index}>{item.name}</option>
        ))}
      </select>
      <FormInput
        placeholder="Название устройства"
        name="name"
        type="text"
        value={device.name}
        onChange={(e) => handleChange(e)}
      />
      <FormInput
        placeholder="Номер устройства"
        name="number"
        type="text"
        value={device.number}
        onChange={(e) => handleChange(e)}
      />
      <FormInput
        placeholder="Имя пользователя"
        name="user"
        type="text"
        value={device.user}
        onChange={(e) => handleChange(e)}
      />
      <button className="add-btn" onClick={(e) => handleAddDevice(e)}>
        Добавить
      </button>
    </form>
  );
};

export default AddDeviceForm;
