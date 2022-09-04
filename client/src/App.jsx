import React, { useState} from "react";
import "./styles/App.css";
import SideBar from "./components/sidebar/SideBar";
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

  const [modalActive, setModalActive] = useState(false);
  const [slideStateContainer, setSlideStateContainer] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [pageName, setPageName] = useState("");

  const delSearchQuery = () => {
    setSearchQuery("");
  };
  const searchQueryLength = searchQuery.length;

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
            <Route path="/dashboard" element={<Homepage />}></Route>
            <Route path="/edit_device" element={<EditDevice />}></Route>
            <Route path="/search"
              element={
                <DeviceSearch
                  searchQuery={searchQuery}
                  setPageName={setPageName}
                  setModalActive={setModalActive}
                  modalActive={modalActive}
                />
              }
            ></Route>
            <Route path="/statistic" element={<Statistic />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/todos" element={<Todos />}></Route>
            <Route path="/calendar" element={<Calendar />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
