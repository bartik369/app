import React from 'react';

const LastAddDevices = (props) => {

    return (
        <div className="last-devices">
            {props.device.id}
            {props.device.deviceName}
            {props.device.deviceNumber}
            {props.device.userName}
        </div>
    )
}

export default LastAddDevices;
