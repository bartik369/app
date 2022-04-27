import React from "react";
import "../styles/App.css";

const DeviceItem = (props) => {
  return (
    <div className="device-item">
      <div className="device-item__device-id">{props.number}</div>
      <div className="device-item__device-type">{props.device.deviceType}</div>
      <div className="device-item__device-name">{props.device.deviceName}</div>
      <div className="device-item__inventory-number">
        {props.device.deviceNumber}
      </div>
      <div className="device-item__username">{props.device.userName}</div>
      <div className="device-item__device-addtime">
        {props.device.deviceAddTime}
      </div>
      <button className="delete-btn" title="Удалить" onClick={() => props.remove(props.device._id)}>
        <i class="bi bi-trash3"></i>
      </button>
      <button className="update-btn" title="Обновить">
      <i class="bi bi-arrow-repeat"></i>
      </button>
    </div>
  );
};

export default DeviceItem;
