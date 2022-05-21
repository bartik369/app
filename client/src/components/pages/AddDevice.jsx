import React from "react";
import AddDeviceForm from "../form/AddDeviceForm";
import Axios from 'axios';

const AddDevice = () => {

    function createNewDevice(newDevice) {
        const {deviceType, deviceName, deviceNumber, userName, deviceAddTime} = newDevice
    
        Axios.post('http://localhost:5001/insert', {
          deviceType: deviceType,
          deviceName: deviceName,
          deviceNumber: deviceNumber,
          userName: userName,
          deviceAddTime: deviceAddTime,
        } )
      }

    return (
      <div className="content-container__inner">
          <div className="title">Добавить устройство</div>
            <AddDeviceForm create={createNewDevice}/>
      </div>
    )
}

export default AddDevice;