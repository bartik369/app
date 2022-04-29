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

  let test = [
    {one: 'ongamepaddisconnected', two: 'chickibriki'},
    {tree: 'ongamepaddisconnected', four: 'chickibriki'},
  ]

  const searchAndSortDevice = useMemo(() => {
    return [...devices].filter((item) => {
      console.log(Object.keys(item))
    })
  }, [searchQuery, devices])

  // const searchAndSortDevice = useMemo(() => {
  //   return [...devices].filter(device =>
  //     device.userName.toLowerCase().includes(searchQuery.toLowerCase()))
  // }, [searchQuery, devices]);


  // let filter=(condition,data)=>{

  //   return data.filter( item => {
  //   return Object.keys( condition ).every( key => {
  //   return String( item[ key ] ).toLowerCase().includes(
  //   String( condition[ key ] ).trim().toLowerCase() )
  //   } )
  //   } )
  //   }

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
