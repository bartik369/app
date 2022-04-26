import React from "react";
import "./styles/App.css";
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

  return (
    <div className="App">
      <div className="menu-container">
        <SideBar />
      </div>
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
