import React from "react";
import Chart from "../widgets/Chart";
import LastDevices from "../widgets/LastDevices";
import OverdueTodo from "../widgets/OverdueTodo";
import "../../styles/App.css"
import DeviceHistory from "../widgets/DeviceHistory";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadTodos } from "../../store/actions/todosActions";

const Homepage = () => {

  let dispatch = useDispatch(state => state.todos)

  useEffect(() => {
    dispatch(loadTodos())
  })

  return (
    <div>
      <div className="wrapper">
        <div className="row">
        <div className="col-m"><LastDevices /></div>
        <div className="col-s"><OverdueTodo /></div>
        <div className="col-s"></div>
        <div className="col-s"></div>
        </div>
        <div className="row">
          <div className="col-m"><Chart /></div>
          <div className="col-m"><DeviceHistory /></div>
          <div className="col-m">fdf</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;