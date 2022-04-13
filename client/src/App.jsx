import React, { useState } from "react";
import DeviceLists from "./components/DeviceLists";
import AddDeviceForm from "./components/form/AddDeviceForm";
import "./styles/App.css";

function App() {
  const [devices, setDevices] = useState([
    {
      id: '',
      deviceName: '',
      inventoryNumber: '',
      userName: '',
    },
  ]);

  function createNewDevice(newDevice) { 
    setDevices([...devices, newDevice])
  }

  return (
    <div className="App">
      <AddDeviceForm create={createNewDevice}/>
      <DeviceLists title="Devices" devices={devices} />
    </div>
  );
}

export default App;
