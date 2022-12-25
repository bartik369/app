import { Navigate } from "react-router-dom";
import Homepage from "../components/pages/Homepage";
import EditDevice from "../components/pages/EditDevice";
import DeviceSearch from "../components/pages/DeviceSearch";
import Statistics from "../components/pages/Statistic";
import Users from "../components/pages/Users";
import Todos from "../components/pages/Todos";
import Calendar from "../components/pages/Calendar";
import Settings from "../components/pages/Settings";
import NotFoundPage from "../components/pages/NotFoundPage/NotFoundPage";
import Login from "../components/pages/Login/Login";
import Signup from "../components/pages/Signup";
import ResetPassword from "../components/pages/ResetPassword/ResetPassword";

export const routes = [
    { path: "/", element: < Navigate to = "/dashboard" / > },
    { path: "/dashboard", element: < Homepage / > },
    { path: "/edit_device", element: < EditDevice / > },
    { path: "/search", element: < DeviceSearch / > },
    { path: "/statistic", element: < Statistics / > },
    { path: "/users", element: < Users / > },
    { path: "/todos", element: < Todos / > },
    { path: "/calendar", element: < Calendar / > },
    { path: "/settings", element: < Settings / > },
    { path: "*", element: < NotFoundPage / > },
    { path: "/", element: < Login / > },
    { path: "/singup", element: < Signup / > },
    { path: "/reset-password", element: < ResetPassword / > },
];

export const authRoutes = [
    { path: "/", element: < Login / > },
    { path: "/singup", element: < Signup / > },
    { path: "/reset-password", element: < ResetPassword / > },
]


{
    /* <Route path="/" element={<Navigate to="/dashboard" />}></Route>
                  <Route path="/dashboard" element={<Homepage />}></Route>
                  <Route path="/edit_device" element={<EditDevice />}></Route>
                  <Route path="/search" element={ <DeviceSearch />}></Route>
                  <Route path="/statistic" element={<Statistic />}></Route>
                  <Route path="/users" element={<Users />}></Route>
                  <Route path="/todos" element={<Todos />}></Route>
                  <Route path="/calendar" element={<Calendar />}></Route>
                  <Route path="/settings" element={<Settings />}></Route>
                  <Route path="*" element={<NotFoundPage />}></Route>
                  <Route path="/" element={!isAuth ? <Login /> : <Navigate to={"/dashboard"} />}></Route>
                  <Route path="/singup" element={!isAuth ? <Signup /> : <Navigate to={"/dashboard"} />}></Route>
                  <Route path="/reset-password" element={!isAuth ? <ResetPassword /> : <Navigate to={"/dashboard"} />}></Route> */
}