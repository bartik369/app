import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { compareAccessToken } from "./store/actions/usersActions";
import "./styles/App.css";
import Content from "./components/pages/Content";
import Login from "./components/pages/Login";
import ResetPassword from "./components/pages/ResetPassword";
import Signup from "./components/pages/Signup";
import Homepage from "./components/pages/Homepage";

function App() {
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.users.isAuth);
  const token = localStorage.getItem("token");

  const routes = [
    { path: "/", element: <Login /> },
    { path: "/singup", element: <Signup /> },
    { path: "/reset-password", element: <ResetPassword /> },
    { path: "*", element: <div>404</div> },
  ];

  console.log("check memory");

  useEffect(() => {

    if (isAuth || token) {
      dispatch(compareAccessToken());
      console.log(isAuth);
    } else {
      navigate("/");
    }
  }, [isAuth, token]);

  useEffect(() => {

    if (isAuth) {
      setShowContent(true);
    } else {
      setShowContent(false);
    }
    console.log(isAuth);
  }, [isAuth, token]);

  return (
    <div className={showContent ? "App" : "App-out"}>
      {showContent 
      ? <Content />
      : <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        </Routes>
      }
    </div>
  );
}

export default App;
