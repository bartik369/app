import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginUser } from "./store/actions/usersActions";
import "./styles/App.css";
import LoginForm from "./components/form/login/Login";
import SignupForm from "./components/form/signup/Signup";
import Content from "./components/pages/Content";

function App() {
  
  const [registered, setRegister] = useState(false);
  const loginStatus = useSelector((state) => state.users.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("log from useeffect", loginStatus)
  }, [])

  const selectSignupHandler = () => {
    setRegister(false);
  };

  const loginFormHandler = () => {
    setRegister(true);
  };


  return (
    <div className={loginStatus ? "App" : "App-out"}>
      { loginStatus 
      ? <Content /> 
      : <Navigate to="" />
      }
      { registered 
      ? <SignupForm selectSignupForm={selectSignupHandler} selectLoginForm={selectSignupHandler} /> 
      : <LoginForm selectSignupForm={loginFormHandler} />
      }
      <div></div>
    </div>
  );
}

export default App;
