import React, { useState, useEffect } from "react";
import "./styles/App.css";
import SideBar from "./components/sidebar/SideBar";
import Axios from "axios";
import ENV from "./env.config";

import { Routes, Route } from "react-router-dom";

import Homepage from "./components/pages/Homepage";
import EditDevice from "./components/pages/EditDevice";
import DeviceSearch from "./components/pages/DeviceSearch";
import Statistic from "./components/pages/Statistic";
import Users from "./components/pages/Users";
import Todos from "./components/pages/Todos";
import Calendar from "./components/pages/Calendar";
import Settings from "./components/pages/Settings";
import Header from "./components/header/Header";

function App() {
  const [devices, setDevices] = useState([
    {
      id: "",
      deviceType: "",
      deviceName: "",
      deviceNumber: "",
      userName: "",
      deviceAddTime: "",
    },
  ]);

  const [todos, setTodos] = useState([
    {
      id: "",
      todoTitle: "",
      todoDescription: "",
      todoAddTime: "",
    },
  ]);

  const [modalActive, setModalActive] = useState(false);
  const [slideStateContainer, setSlideStateContainer] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    Axios.get(`${ENV.HOSTNAME}devices`).then((response) => {
      setDevices(response.data);
    });

    Axios.get(`${ENV.HOSTNAME}todos`).then((response) => {
      setTodos(response.data)
    })
  }, []);

  const delSearchQuery = () => {
    setSearchQuery("");
  };
  const searchQueryLength = searchQuery.length;

  const addVisibleModal = () => {
    setModalActive(true);
  }

  return (
    <div className="App">
      <div className="menu-container">
        <SideBar
          slideContentContainer={setSlideStateContainer}
          getLinkName={setPageName}
        />
      </div>
      <div
        className={`content-wrapper slided-content${
          slideStateContainer === false ? "slided-content" : ""
        }`}
      >
        <Header
          getSearchQuery={setSearchQuery}
          delSearchQuery={delSearchQuery}
          value={searchQuery}
          searchQueryLength={searchQueryLength}
          pageName={pageName}
        />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Homepage devices={devices} />}></Route>
            <Route path="/edit_device" element={<EditDevice />}></Route>
            <Route path="/search"
              element={
                <DeviceSearch
                  searchQuery={searchQuery}
                  setPageName={setPageName}
                  devices={devices}
                  setDevices={setDevices}
                  setModalActive={setModalActive}
                  modalActive={modalActive}
                />
              }
            ></Route>
            <Route path="/statistic" element={<Statistic />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/todos" element={<Todos 
            todos={todos}
            setTodos={setTodos}
            newTodoHandler={addVisibleModal}
            modalActive={modalActive} 
            setModalActive={setModalActive}
            modal={setModalActive}
            />}></Route>
            <Route path="/calendar" element={<Calendar />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
