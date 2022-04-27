import React, { useEffect, useMemo, useState } from "react";
import Axios from "axios";
import DeviceLists from "../DeviceLists";
import SearchData from "../UI/search/SearchData";

const DeviceSearch = () => {
  const [devices, setDevices] = useState([
    {
      id: "",
      deviceType: "",
      deviceName: "",
      deviceNumber: "",
      userName: "",
      deviceAddTime: "",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    Axios.get("http://localhost:5001/read").then((response) => {
      setDevices(response.data);
    });
  }, []);

  function removeDevice(id) {
    Axios.delete(`http://localhost:5001/delete/${id}`);
  }


  const searchAndSortDevice = useMemo(() => {
    console.log('type');
    return [...devices].filter(device => device.deviceNumber.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, devices]);

  return ( 
    <div className="device-search">
      <SearchData
        placeholder='Поиск...'
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <DeviceLists
        remove={removeDevice}
        title="Список устройств"
        devices={searchAndSortDevice}
      />
    </div>
  );
};

export default DeviceSearch;
