import React from "react";
import DeviceItem from "./DeviceItem";

const DeviceLists = ({ devices, title }) => {
  return (
    <div className="device-list">
      <h1>{title}</h1>
      {devices.map((device, index) => 
        <DeviceItem key={device.id} device={device} number={index + 1}/>
      )}
    </div>
  );
};

export default DeviceLists;
