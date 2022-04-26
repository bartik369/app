import React, { useEffect, useState } from "react";
// import DeviceLists from "./components/DeviceLists";
// import AddDeviceForm from "./components/form/AddDeviceForm";
import Axios from 'axios'
import "./styles/App.css";
// import SearchData from "./components/UI/search/SearchData";
import SideBar from "./components/sidebar/SideBar";

import { Routes, Route, Link } from 'react-router-dom';

import Homepage from './components/pages/Homepage';
import AddDevice from './components/pages/AddDevice';
import DeviceSearch from './components/pages/DeviceSearch';
import Statistic from './components/pages/Statistic';
import Users from './components/pages/Users';
import Tasks from './components/pages/Tasks';
import Calendar from './components/pages/Calendar';
import Settings from './components/pages/Settings';

function App() {
  
  // const [devices, setDevices] = useState([
  //   {
  //     id: '',
  //     deviceType: '',
  //     deviceName: '',
  //     deviceNumber: '',
  //     userName: '',
  //     deviceAddTime: '',
  //   },
  // ]);
  
  // useEffect(() => {
  //   Axios.get('http://localhost:5001/read').then((response) => {
  //     setDevices(response.data)
  //   });
  // }, []);

  // function createNewDevice(newDevice) {
  //   const {deviceType, deviceName, deviceNumber, userName, deviceAddTime} = newDevice

  //   Axios.post('http://localhost:5001/insert', {
  //     deviceType: deviceType,
  //     deviceName: deviceName,
  //     deviceNumber: deviceNumber,
  //     userName: userName,
  //     deviceAddTime: deviceAddTime,
  //   } )
  // }

  // function removeDevice(id) {
  //   Axios.delete(`http://localhost:5001/delete/${id}`)
  // }

  return (
    <div className="App">
      <div className="menu-container">
        <SideBar />
      </div>
      {/* <AddDeviceForm create={createNewDevice}/> */}
      {/* <SearchData /> */}
      {/* <DeviceLists remove={removeDevice} title="Devices" devices={devices} /> */}
      <div className="content-container">
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/add_device' element={<AddDevice />}></Route>
          <Route path='/search' element={<DeviceSearch />}></Route>
          <Route path='/statistic' element={<Statistic />}></Route>
          <Route path='/users' element={<Users />}></Route>
          <Route path='/tasks' element={<Tasks />}></Route>
          <Route path='/calendar' element={<Calendar />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
