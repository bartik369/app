import React from "react";
import DeviceItem from "./DeviceItem";

const DeviceLists = ({ devices, title, remove }) => {
  return (
    <div className="device-list">
      <div className="title">{title}</div>
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
