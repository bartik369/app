import React from 'react';

const DeviceItem = (props) => {
    return (
        <div className="device-item">
            <div className="device-item__device-name">
                {props.devItem.deviceName}
            </div>
            <div className="device-item__inventory-number">
                {props.devItem.inventoryNumber}
            </div>
            <div className="device-item__username">
                {props.devItem.userName}
            </div>
        </div>
    );
};

export default DeviceItem;