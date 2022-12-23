import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { compareAccessToken } from "./store/actions/usersActions";
import Sidebar from "./components/sidebar/SideBar";
import Header from "./components/header/Header";
import Homepage from "./components/pages/Homepage";
import EditDevice from "./components/pages/EditDevice";
import Login from "./components/pages/Login/Login";
import Signup from "./components/pages/Signup";
import DeviceSearch from "./components/pages/DeviceSearch";
import Statistic from "./components/pages/Statistic";
import Users from "./components/pages/Users";
import Todos from "./components/pages/Todos";
import Calendar from "./components/pages/Calendar";
import Settings from "./components/pages/Settings";
import ResetPassword from "./components/pages/ResetPassword/ResetPassword";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage";
import "./styles/App.css";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.users.isAuth);
  const token = localStorage.getItem("token");

  console.log("check memory");

  const [modalActive, setModalActive] = useState(false);
  const [slideStateContainer, setSlideStateContainer] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [pageName, setPageName] = useState("");

  
  useEffect(() => {

    if (isAuth || token) {
      dispatch(compareAccessToken());
      console.log(isAuth);
    } else {
      navigate("/");
    }
  }, [isAuth, token]);

  const delSearchQuery = () => {
    setSearchQuery("");
  };

  const searchQueryLength = searchQuery.length;

  return (
    <div className={isAuth ? "App" : "App-out"}>
      {isAuth ? (
        <div className="afterlogin">
          <div className="menu-container">
            <Sidebar
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
              // logout={logout}
              moveHeader={slideStateContainer}
            />
            <div className="content-container">
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />}>
                  {" "}
                </Route>
                <Route path="/dashboard" element={<Homepage />}></Route>
                <Route path="/edit_device" element={<EditDevice />}></Route>
                <Route path="/search" element={ <DeviceSearch searchQuery={searchQuery} />}></Route>
                <Route path="/statistic" element={<Statistic />}></Route>
                <Route path="/users" element={<Users />}></Route>
                <Route path="/todos" element={<Todos />}></Route>
                <Route path="/calendar" element={<Calendar />}></Route>
                <Route path="/settings" element={<Settings />}></Route>
                <Route path="*" element={<NotFoundPage />}></Route>
                <Route path="/" element={!isAuth ? <Login /> : <Navigate to={"/dashboard"} />}></Route>
                <Route path="/singup" element={!isAuth ? <Signup /> : <Navigate to={"/dashboard"} />}></Route>
                <Route path="/reset-password" element={!isAuth ? <ResetPassword /> : <Navigate to={"/dashboard"} />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} ></Route>
          <Route path="/singup" element={<Signup />}></Route>
          <Route path="/reset-password" element={ <ResetPassword />}></Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
