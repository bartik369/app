import React from "react";
import DeviceItem from "./DeviceItem";

const DeviceLists = ({ devices }) => {
  return (
    <div className="device-list">
      {devices.map((device) => (
        <DeviceItem key={device.id} devItem={device} />
      ))}
    </div>
  );
};

export default DeviceLists;
