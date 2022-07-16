import React from "react";
import Chart from "../widgets/Chart";
import LastDevices from "../widgets/LastDevices";
import OverdueTodo from "../widgets/OverdueTodo";
import "../../styles/App.css"

const Homepage = ({ devices, todos }) => {

  return (
    <div>
      <div className="wrapper">
        <div className="row">
        <div className="col-s"><LastDevices devices={devices}/></div>
        <div className="col-s"><OverdueTodo todos={todos}/></div>
        <div className="col-s"><LastDevices devices={devices}/></div>
        <div className="col-s"><OverdueTodo todos={todos}/></div>
        </div>
        <div className="row">
          <div className="col-m">
          <Chart devices={devices}/>
          </div>
          <div className="col-m">
          <Chart devices={devices}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;