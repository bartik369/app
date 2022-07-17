import React from "react";
import Chart from "../widgets/Chart";
import LastDevices from "../widgets/LastDevices";
import OverdueTodo from "../widgets/OverdueTodo";
import "../../styles/App.css"
import DeviceHistory from "../widgets/DeviceHistory";

const Homepage = ({ devices, todos }) => {

  return (
    <div>
      <div className="wrapper">
        <div className="row">
        <div className="col-s"><LastDevices devices={devices}/></div>
        <div className="col-s"><OverdueTodo todos={todos}/></div>
        <div className="col-s"></div>
        <div className="col-s"></div>
        </div>
        <div className="row">
          <div className="col-m"><Chart devices={devices}/></div>
          <div className="col-m"><DeviceHistory devices={devices}/></div>
          <div className="col-m">fdf</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;