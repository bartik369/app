import React, { useEffect, useState } from "react";
import DeviceLists from "./components/DeviceLists";
import AddDeviceForm from "./components/form/AddDeviceForm";
import Axios from 'axios'
import "./styles/App.css";
import SearchData from "./components/UI/search/SearchData";
import SideBar from "./components/sidebar/SideBar";

function App() {
  
  const [devices, setDevices] = useState([
    {
      id: '',
      deviceType: '',
      deviceName: '',
      deviceNumber: '',
      userName: '',
      deviceAddTime: '',
    },
  ]);
  
  useEffect(() => {
    Axios.get('http://localhost:5001/read').then((response) => {
      setDevices(response.data)
    });
  }, []);

  function createNewDevice(newDevice) {
    const {deviceType, deviceName, deviceNumber, userName, deviceAddTime} = newDevice

    Axios.post('http://localhost:5001/insert', {
      deviceType: deviceType,
      deviceName: deviceName,
      deviceNumber: deviceNumber,
      userName: userName,
      deviceAddTime: deviceAddTime,
    } )
  }

  function removeDevice(id) {
    Axios.delete(`http://localhost:5001/delete/${id}`)
  }

  return (
    <div className="App">
      <SideBar />
      <AddDeviceForm create={createNewDevice}/>
      <SearchData />
      <DeviceLists remove={removeDevice} title="Devices" devices={devices} />
    </div>
  );
}

export default App;
