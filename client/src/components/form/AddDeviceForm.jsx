import React, { useState } from "react";
import AddButton from "../UI/button/AddButton";
import FormInput from "../UI/input/FormInput";

const AddDeviceForm = ({create}) => {
  const [device, setDevice] = useState([
    {
      id: '',
      deviceName: '',
      inventoryNumber: '',
      userName: '',
    },
  ]);  

  function addNewDevice(e) {
    e.preventDefault();
    const newDevice = {
        ...device,
        id: Date.now(),
    }
    create(newDevice)
  }

  return (
    <form>
      <FormInput
        placeholder="Название устройства"
        value={device.deviceName}
        onChange={(e) => setDevice({ ...device, deviceName: e.target.value })}
      />
      <FormInput
        placeholder="Инвентарный номер"
        value={device.inventoryNumber}
        onChange={(e) =>
          setDevice({ ...device, inventoryNumber: e.target.value })
        }
      />
      <FormInput
        placeholder="Имя пользователя"
        value={device.userName}
        onChange={(e) => setDevice({ ...device, userName: e.target.value })}
      />

      <AddButton onClick={addNewDevice}>Добавить</AddButton>
    </form>
  );
};

export default AddDeviceForm;
