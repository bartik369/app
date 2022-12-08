import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { compareAccessToken } from "./store/actions/usersActions";
import "./styles/App.css";
import LoginForm from "./components/form/login/Login";
import SignupForm from "./components/form/signup/Signup";
import Content from "./components/pages/Content";

function App() {
  const [registered, setRegister] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const isAuth = useSelector((state) => state.users.isAuth);



  useEffect(() => {
    console.log(isAuth)
    dispatch(compareAccessToken())
  }, []);

  // const user = useSelector((state) => state.users.user)
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
    <div className={isAuth ? "App" : "App-out"}>
      {isAuth 
      ? ( <Content /> ) 
      : registered 
      ? ( <SignupForm selectSignupForm={selectSignupHandler} selectLoginForm={selectSignupHandler} />) 
      : ( <LoginForm selectSignupForm={loginFormHandler} />)}
     
      <div></div>
    </div>
  );
}

export default App;
