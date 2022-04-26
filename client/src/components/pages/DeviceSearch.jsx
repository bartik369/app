import React, {useEffect, useState} from "react";
import Axios from 'axios';
import DeviceLists from "../DeviceLists";
import SearchData from "../UI/search/SearchData";

const DeviceSearch = () => {

    const [devices, setDevices] = useState([
        {
          id: '',
          deviceType: '',
          deviceName: '',
          deviceNumber: '',
          userName: '',
          deviceAddTime: '',
        },
      ]);

    useEffect(() => {
        Axios.get('http://localhost:5001/read').then((response) => {
          setDevices(response.data)
        });
      }, []);

      function removeDevice(id) {
        Axios.delete(`http://localhost:5001/delete/${id}`)
      }

    return (
        <div className="device-search">
            <SearchData/>
            <DeviceLists remove={removeDevice} title="Devices" devices={devices} />
        </div>
    )
}

export default DeviceSearch;