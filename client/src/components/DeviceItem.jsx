import React from 'react';

const DeviceItem = (props) => {
    return (
        <div className="device-item">
            <div className="device-item__device-id">
                {props.number}
            </div>
            <div className="device-item__device-type">
                {props.device.deviceType}
            </div>
            <div className="device-item__device-name">
                {props.device.deviceName}
            </div>
            <div className="device-item__inventory-number">
                {props.device.deviceNumber}
            </div>
            <div className="device-item__username">
                {props.device.userName}
            </div>
            <div className="device-item__username">
                {props.device.deviceAddTime}
            </div>
            <button onClick={() => props.remove(props.device)}>Удалить</button>
        </div>
    );
};

export default DeviceItem;