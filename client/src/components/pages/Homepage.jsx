import React from "react";
import LastDevices from "../widgets/LastDevices";
import OverdueTodo from "../widgets/OverdueTodo";
import "../widgets/widgets.css";

const Homepage = ({ devices, todos }) => {

  return (
    <div className="home-wrapper">
      <div className="top-side">
        <LastDevices devices={devices}/>
        <OverdueTodo todos={todos}/>
      </div>
    </div>
  );
};

export default Homepage;