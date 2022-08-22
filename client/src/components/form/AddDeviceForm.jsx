import React, { useState, useEffect} from "react";
import FormInput from "./FormInput";
import { useSelector, useDispatch } from "react-redux";

const AddDeviceForm = ({ create }) => {
  const [device, setDevice] = useState({
    id: "",
    type: "",
    name: "",
    number: "",
    user: "",
    addTime: "",
  });

  const [errors, setErrors] = useState(
    {
      type: "",
      name: "",
      number: "",
      user: "",
    }
  );
  const [validForm, setValidForm] = useState(false);


  const deviceTypeArray = [
    {name: 'Компьютеры', value: 'pc'},
    {name: 'Сетевое оборудование', value: 'network'},
    {name: 'Принтеры', value: 'printers'},
    {name: 'Телефоны', value: 'phones'},
    {name: 'Аксессуары', value: 'accessories'},
  ];

  let dispatch = useDispatch();
  

  useEffect(() => {
    if (device.type !== "" 
    && device.name !== "" 
    && device.number !== "" 
    && device.user !== "") {
      setValidForm(true)
    } else {
      setValidForm(false)
    }
  }, [device.type, device.name, device.number, device.user]);


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

  const validate = (name, value) => {
    const checkRegExpOne = new RegExp(/^[а-яА-ЯёЁa-zA-Z0-9]+$|\s/i).test(value);
    const checkRegExpTwo = new RegExp(/^[а-яА-ЯёЁa-zA-Z]+$|\s/i).test(value);
    switch (name) {
      case "type":
        !new RegExp(/^[^\s]/).test(value)
          ? setErrors({...errors, type: "Укажите тип устройства"})
          : setErrors({...errors, type: ""})
        break;
      case "name":
        !checkRegExpOne
          ? setErrors({...errors, name: "Введите корректное имя"})
          : setErrors({...errors, name: ""})
        break;
      case "number":
        !checkRegExpOne
          ? setErrors({...errors, number: "Введите корректный номер"})
          : setErrors({...errors, number: ""})
        break;
      case "user":
        !checkRegExpTwo
          ? setErrors({...errors, user: "Введите корректное имя"})
          : setErrors({...errors, user: ""})
        break;
      default:
        break;
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    validate(name, value)
    setDevice({...device, [name]: value})
  }


  return (
    <form className="add-device-form">
      {errors.type && <div className="form-error">{errors.type}</div>}
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
      {errors.name && <div className="form-error">{errors.name}</div>}
      <FormInput
        placeholder="Название устройства"
        name="name"
        type="text"
        value={device.name || ""}
        onChange={(e) => handleChange(e)}
      />
      {errors.number && <div className="form-error">{errors.number}</div>}
      <FormInput
        placeholder="Номер устройства"
        name="number"
        type="text"
        value={device.number || ""}
        onChange={(e) => handleChange(e)}
      />
      {errors.user && <div className="form-error">{errors.user}</div>}
      <FormInput
        placeholder="Имя пользователя"
        name="user"
        type="text"
        value={device.user || ""}
        onChange={(e) => handleChange(e)}
      />
      <button disabled={!validForm} type="submit" className="add-btn" onClick={(e) => handleAddDevice(e)}>
        Добавить
      </button>
    </form>
  );
};

export default AddDeviceForm;
