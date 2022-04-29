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

  const myFilter = (e, data) => {
    return data.filter( item => {



      return Object.keys(item).every(key => {
        console.log(Object.keys(item).includes(String( e[ key ] ).trim().toLowerCase()))
        // return String(item[key]).toLowerCase().includes(
        //   console.log( String(item[key]).trim().toLowerCase())
          // String(condition[key]).trim().toLowerCase()
        // )
      })


        // return Object.keys( condition ).every( key => {
        //   // console.log(key)
        //     return String( item[ key ] ).toLowerCase().includes(
        //         String( condition[ key ] ).trim().toLowerCase() )
        // } )
    } )  
}

const searchQueryHandler = (e) => {
  myFilter(e, devices)
  // setDevices({...devices, [e.target.name]: e.target.value})
  console.log( myFilter(devices))
  // const check = myFilter(condition, devices)
  setSearchQuery()

}


  return ( 
    <div className="device-search">
      <SearchData
        placeholder='Поиск...'
        value={searchQuery}
        onChange={e => searchQueryHandler(e)}
      />
      <DeviceLists
        remove={removeDevice}
        title="Список устройств"
        devices={devices}
      />
    </div>
  );
};

export default DeviceSearch;
