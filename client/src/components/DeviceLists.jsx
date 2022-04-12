import React from "react";
import DeviceItem from "./DeviceItem";

const DeviceLists = ({ devices, title }) => {
  return (
    <div className="device-list">
      <h1>{title}</h1>
      {devices.map((device) => (
        <DeviceItem key={device.id} devItem={device} />
      ))}
    </div>
  );
};

export default DeviceLists;
