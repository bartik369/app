import React from 'react';

const DeviceItem = (props) => {
    return (
        <div className="device-item">
            <div className="device-item__device-name">
                {props.deviceItem.deviceName}
            </div>
            <div className="device-item__inventory-number">
                {props.deviceItem.inventoryNumber}
            </div>
            <div className="device-item__username">
                {props.deviceItem.userName}
            </div>
        </div>
    );
};

export default DeviceItem;