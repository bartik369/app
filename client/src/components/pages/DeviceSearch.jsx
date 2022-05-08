import React, { useEffect, useMemo, useState } from "react";
import Axios from "axios";
import DeviceLists from "../DeviceLists";
import SearchData from "../UI/search/SearchData";
import Modal from "../UI/modal/Modal";
import UpdateDeviceForm from "../form/UpdateDeviceForm";

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

  const [searchQuery, setSearchQuery] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [updateDeviceId, setUpdateDeviceId] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState();

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return function() {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])


  // Load and filter devices

  useEffect(() => {
    if (fetching) {
      Axios.get(`http://localhost:5001/devices?_limit=20&_page=${currentPage}`)
      .then(response => { 
      setDevices(response.data);
      setCurrentPage(prevState => prevState + 1);
      setTotalCount(response.headers['x-total-count'])
    })
    .finally(() => setFetching(false));
    }
  }, [fetching]);

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
    && devices.length < totalCount) {
       setFetching(true)
    }
  } 

  const filterData = devices.filter((item) => {
    return Object.keys(item).some((key) =>
      String(item[key]).toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // console.log(filterData)


  
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Delete device

  function removeDevice(id) {
    Axios.delete(`http://localhost:5001/device/${id}`).then((response) => {
      const indexOfDelitedItem = devices.filter((item) => 
      item._id !== response.data.id
      )
      setDevices(indexOfDelitedItem)
    })
  }

  // Update device

  function getUpdateDeviceInfo(id) {
    Axios.get(`http://localhost:5001/device/${id}`).then((response) => {
      setUpdateDeviceId(response.data[0])
    })
  }

  const handleUpdateDeviceInfo = (id) => {
    setModalActive(true);
    getUpdateDeviceInfo(id);
  }

  return (
    <div className="device-search">
      <Modal visible={modalActive} setVisible={setModalActive}>
        <UpdateDeviceForm 
        updateInfo={updateDeviceId} 
        modal={setModalActive} 
        devices={devices} 
        setDevices={setDevices} />
      </Modal>
      <SearchData
        placeholder="Поиск..."
        value={searchQuery}
        onChange={handleChange}
      />
      <DeviceLists
        update={handleUpdateDeviceInfo}
        remove={removeDevice}
        title="Список устройств"
        devices={filterData}
      />
    </div>
  );
};

export default DeviceSearch;
