import React, { useState} from "react";
import "./styles/App.css";
import LoginForm from "./components/form/Login";
import SignupForm from "./components/form/Signup";
import Content from "./components/pages/Content";

function App() {


  const [isLogin, setIslogin] = useState(true)
  const [registered, setRegister] = useState(false)



  const selectSignupHandler = () => {
   setRegister(true)
  }
  const loginFormHandler = () => {
    setRegister(false)
  }

  const hideForm = () => {
    setIslogin(true)
  }

  const logoutHandler = () => {
    setIslogin(false)
  }
  console.log("fdsfsfsdfs")

  return (
    <div className={isLogin ? "App" : "App-out"}>
      {isLogin ? (
        <Content logout={logoutHandler} />
      ) : registered ? (
        <LoginForm selectSignupForm={loginFormHandler} loginHandler={hideForm} />
      ) : (
        <SignupForm
          selectSignupForm={selectSignupHandler}
          selectLoginForm={selectSignupHandler}
        />
      )}
      <div></div>
    </div>
  );
}

export default App;
