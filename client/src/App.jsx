import React, { useState } from "react";
import DeviceLists from "./components/DeviceLists";
import "./styles/App.css";

// const[device, setDevice] = useState({
//   id: '',
//   deviceName: '',
//   inventoryNumber: '',
//   userName: '',
// });
function App() {
  const [devices, setDevices] = useState([
    {
      id: 1,
      deviceName: "Dell 5440",
      inventoryNumber: "7002134",
      userName: "bartale",
    },
    {
      id: 2,
      deviceName: "Dell 5280",
      inventoryNumber: "7001193",
      userName: "petroale",
    },
  ]);

  function addDevice(device) {}

  return (
    <div className="App">
      <DeviceLists devices={devices} />
    </div>
  );
}

export default App;
