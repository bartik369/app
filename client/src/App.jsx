import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { compareValidTioken } from "./store/actions/usersActions";
import "./styles/App.css";
import LoginForm from "./components/form/login/Login";
import SignupForm from "./components/form/signup/Signup";
import Content from "./components/pages/Content";

function App() {
  const [registered, setRegister] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();
  // const user = useSelector((state) => state.users.user)
  // const isAuth = useSelector((state) => state.users.isAuth);
  // const isToken = localStorage.getItem("token");

  // useEffect(() => {

  //   if (isAuth || isToken) {
  //     setShowContent(true)
  //   } else {
  //     setShowContent(false)
  //     navigate("/")
  //   }
  // }, [isAuth, isToken]);

  const selectSignupHandler = () => {
    setRegister(false);
  };

  const loginFormHandler = () => {
    setRegister(true);
  };

  return (
    <div className={showContent ? "App" : "App-out"}>
      {showContent 
      ? ( <Content /> ) 
      : registered 
      ? ( <SignupForm selectSignupForm={selectSignupHandler} selectLoginForm={selectSignupHandler} />) 
      : ( <LoginForm selectSignupForm={loginFormHandler} />)}
     
      <div></div>
    </div>
  );
}

export default App;
