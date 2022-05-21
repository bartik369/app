import React from 'react';
import '../widgets/widgets.css'

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
