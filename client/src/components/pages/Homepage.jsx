import React from "react";
import Chart from "../widgets/Chart";
import LastDevices from "../widgets/LastDevices";
import OverdueTodo from "../widgets/OverdueTodo";
import "../widgets/widgets.css";

const Homepage = ({ devices, todos }) => {

  return (
    <div className="home-wrapper">
      <div className="top-side">
        <LastDevices devices={devices}/>
        <OverdueTodo todos={todos}/>
        <Chart devices={devices}/>
      </div>
    </div>
  );
};

export default Homepage;