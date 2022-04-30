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
    Axios.get("http://localhost:5001/read").then(response => {
      setDevices(response.data);
    });
  }, []);

  function removeDevice(id) {
    Axios.delete(`http://localhost:5001/delete/${id}`);
  }

  const filterData = devices.filter(item => {
    return Object.keys(item).some(key =>
      String(item[key]).toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return ( 
    <div className="device-search">
      <SearchData
        placeholder='Поиск...'
        value={searchQuery}
        onChange={handleChange}
      />
      <DeviceLists
        remove={removeDevice}
        title="Список устройств"
        devices={filterData}
      />
    </div>
  );
};

export default DeviceSearch;
