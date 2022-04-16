import React, { useState } from "react";
import DeviceLists from "./components/DeviceLists";
import AddDeviceForm from "./components/form/AddDeviceForm";
import "./styles/App.css";

function App() {
  const [devices, setDevices] = useState([
    {
      id: '1',
      deviceType: 'Ноутбук',
      deviceName: 'Dell 5490',
      deviceNumber: '7002135',
      userName: 'bartale',
      addDeviceTime: Date.now(),
    },
  ]);

  function createNewDevice(newDevice) { 
    setDevices([...devices, newDevice])
  }

  function removeDevice(device) {
    setDevices(devices.filter(d => d.id !== device.id))
  }

  return (
    <div className="App">
      <AddDeviceForm create={createNewDevice}/>
      <DeviceLists remove={removeDevice} title="Devices" devices={devices} />
    </div>
  );
}

export default App;
