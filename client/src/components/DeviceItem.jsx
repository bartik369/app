import React from 'react';

const DeviceItem = (props) => {
    return (
        <div className="device-item">
            <div className="device-item__device-name">
                {props.number}
                {props.device.deviceName}
            </div>
            <div className="device-item__inventory-number">
                {props.device.deviceNumber}
            </div>
            <div className="device-item__username">
                {props.device.userName}
            </div>
        </div>
    );
};

export default DeviceItem;