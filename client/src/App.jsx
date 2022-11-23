import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import "./styles/App.css";
import LoginForm from "./components/form/login/Login";
import SignupForm from "./components/form/signup/Signup";
import Content from "./components/pages/Content";

function App() {
  const [isLogin, setIslogin] = useState("");
  const [registered, setRegister] = useState(false);

  const loginStatus = useSelector((state) => state.auth);

  useEffect(() => {
    setIslogin(loginStatus.isLoggedIn)
    console.log("login from app", loginStatus)
  }, [loginStatus])
  

  const selectSignupHandler = () => {
    setRegister(false);
  };
  const loginFormHandler = () => {
    setRegister(true);
  };

  const hideForm = () => {
    // setIslogin(loginStatus.isLoggedIn)
    // console.log(loginStatus.isLoggedIn)
  };

  const logoutHandler = () => {

  };


  return (
    <div className={loginStatus ? "App" : "App-out"}>
      {loginStatus ? (
        <Content logout={logoutHandler} />
      ) : registered ? (
        <SignupForm
          selectSignupForm={selectSignupHandler}
          selectLoginForm={selectSignupHandler}
        />
      ) : (
        <LoginForm
          selectSignupForm={loginFormHandler}
          loginHandler={hideForm}
        />
      )}
      <div></div>
    </div>
  );
}

export default App;
