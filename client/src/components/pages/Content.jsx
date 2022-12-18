import React, { useState} from "react";
import "../../styles/App.css";
import SideBar from "../sidebar/SideBar";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import EditDevice from "./EditDevice";
import DeviceSearch from "./DeviceSearch";
import Statistic from "./Statistic";
import Users from "./Users";
import Todos from "./Todos";
import Calendar from "./Calendar";
import Settings from "./Settings";
import Header from "../header/Header";
import SetNewPassword from "../form/reset-password/SetNewPassword";

export default function Content({logout}) {

    const [modalActive, setModalActive] = useState(false);
    const [slideStateContainer, setSlideStateContainer] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [pageName, setPageName] = useState("");

    const resetLink = ""
  
  
    const delSearchQuery = () => {
      setSearchQuery("");
    };
    
    const searchQueryLength = searchQuery.length;

  return (
    <div className="afterlogin">
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
          logout={logout}
          moveHeader={slideStateContainer}
        />
        <div className="content-container">
          <Routes>
            <Route path={resetLink} element={<SetNewPassword />}></Route>
            <Route path="/" element={<Navigate to="/dashboard" />}> </Route>
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
  )
}
