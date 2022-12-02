import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./styles/App.css";
import LoginForm from "./components/form/login/Login";
import SignupForm from "./components/form/signup/Signup";
import Content from "./components/pages/Content";

function App() {
  const [registered, setRegister] = useState(false);
  const loginStatus = useSelector((state) => state.users.isAuth);
  const navigate = useNavigate()

  useEffect(() => {
    console.log("log from useeffect", loginStatus);
    if (!loginStatus) {
      navigate("/")
    }
  }, []);

  const selectSignupHandler = () => {
    setRegister(false);
  };

  const loginFormHandler = () => {
    setRegister(true);
  };

  return (
    <div className={loginStatus ? "App" : "App-out"}>
      {loginStatus 
      ? ( <Content /> ) 
      : registered 
      ? ( <SignupForm selectSignupForm={selectSignupHandler} selectLoginForm={selectSignupHandler} />) 
      : ( <LoginForm selectSignupForm={loginFormHandler} />)}
     
      <div></div>
    </div>
  );
}

export default App;
