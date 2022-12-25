import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { compareAccessToken } from "./store/actions/usersActions";
import Sidebar from "./components/sidebar/SideBar";
import Header from "./components/header/Header";
import "./styles/App.css";
import { routes, authRoutes } from "./routes/routes.js";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.users.isAuth);
  const token = localStorage.getItem("token");

  console.log("check memory");

  const [slideStateContainer, setSlideStateContainer] = useState(false);

  useEffect(() => {
    
    if (isAuth || token) {
      dispatch(compareAccessToken());
    } else {
      navigate("/");
    }
  }, [isAuth, token]);

  return (
    <div className={isAuth ? "App" : "App-out"}>
      {isAuth ? (
        <div className="afterlogin">
          <div className="menu-container">
            <Sidebar slideContentContainer={setSlideStateContainer} />
          </div>
          <div
            className={`content-wrapper slided-content${
              slideStateContainer === false ? "slided-content" : ""
            }`}
          >
            <Header moveHeader={slideStateContainer} />
            <div className="content-container">
              <Routes>
                {routes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </div>
          </div>
        </div>
      ) : (
        <Routes>
          {authRoutes.map((route) => (
            <Route
            key={route.path}
            path={route.path}
            element={isAuth ? <Navigate to={"/dashboard"} /> : route.element}
          />
          ))}
        </Routes>
      )}
    </div>
  );
}

export default App;

