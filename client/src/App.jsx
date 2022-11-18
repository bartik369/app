import React, { useState} from "react";
import "./styles/App.css";
import LoginForm from "./components/form/login/Login";
import SignupForm from "./components/form/signup/Signup";
import Content from "./components/pages/Content";

function App() {


  const [isLogin, setIslogin] = useState(false)
  const [registered, setRegister] = useState(false)



  const selectSignupHandler = () => {
   setRegister(false)
  }
  const loginFormHandler = () => {
    setRegister(true)
  }

  const hideForm = () => {
    // setIslogin(true)
  }

  const logoutHandler = () => {
    setIslogin(false)
  }


  return (
    <div className={isLogin ? "App" : "App-out"}>
      {isLogin ? (
        <Content logout={logoutHandler} />
      ) : registered ? (
        <SignupForm
          selectSignupForm={selectSignupHandler}
          selectLoginForm={selectSignupHandler}
        />
      ) : (
        <LoginForm selectSignupForm={loginFormHandler} loginHandler={hideForm} />
      )}
      <div></div>
    </div>
  );
}

export default App;
