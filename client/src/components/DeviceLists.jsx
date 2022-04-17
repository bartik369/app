import React from "react";
import DeviceItem from "./DeviceItem";

const DeviceLists = ({ devices, title, remove }) => {
  return (
    <div className="device-list">
      <h1>{title}</h1>
      {devices.map((device, index) => (
        <DeviceItem
          key={device.id}
          device={device}
          number={index + 1}
          remove={remove}
        />
      ))}
    </div>
  );
};

export default DeviceLists;
