import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { compareAccessToken } from "./store/actions/usersActions";
import "./styles/App.css";
import Content from "./components/pages/Content";
import Login from "./components/pages/Login/Login";
// import Login from "./components/pages/Login/Login";
// import ResetPassword from "./components/pages/ResetPassword";
import Signup from "./components/pages/Signup";
// import Homepage from "./components/pages/Homepage";

function App() {
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.users.isAuth);
  const token = localStorage.getItem("token");


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
    <div className={isAuth ? "App" : "App-out"}>
      <Content /> 
    </div>
  );
}

//   return (
//     <div className={isAuth ? "App" : "App-out"}>
//       {isAuth 
//       ? <Content /> 
//       : <Routes>
//           <Route path="/" element={!isAuth
//             ? <Login />
//             : <Navigate to={"/dashboard"} />
//             }> 
//           </Route>
//           <Route path="/singup" element={!isAuth
//             ? <Signup />
//             : <Navigate to={"/dashboard"} />
//             }>
//             </Route>

//       </Routes> }
//     </div>
//   );
// }

export default App;
