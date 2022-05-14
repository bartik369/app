import React, { useEffect, useMemo, useState } from "react";
import Axios from "axios";
import DeviceLists from "../DeviceLists";
import Modal from "../UI/modal/Modal";
import UpdateDeviceForm from "../form/UpdateDeviceForm";
import Pagination from "../UI/pagination/Pagination";
import '../../styles/App.css'

const DeviceSearch = ({searchQuery}) => {
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


  // const [searchQuery, setSearchQuery] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [updateDeviceId, setUpdateDeviceId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [devicesPerPage] = useState(20);


  useEffect(() => {
    const fetchDevices = async () => {
      await Axios.get(`http://localhost:5001/devices`).then((response) => {
        setDevices(response.data);
      });
    };
    fetchDevices();
  }, []);

  const indexOfLastDevice = currentPage * devicesPerPage;
  const indefOfFirstDevice = indexOfLastDevice - devicesPerPage;
  
// перенести в header
  const filterData = devices
    .filter((item) => {
      return Object.keys(item).some((key) =>
        String(item[key]).toLowerCase().includes(searchQuery.toLowerCase())
      );
    }).slice(indefOfFirstDevice, indexOfLastDevice);

  const pageNumberHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  }


  // Delete device

  function removeDevice(id) {
    Axios.delete(`http://localhost:5001/device/${id}`).then((response) => {
      const indexOfDelitedItem = devices.filter(
        (item) => item._id !== response.data.id
      );
      setDevices(indexOfDelitedItem);
    });
  }

  // Update device

  function getUpdateDeviceInfo(id) {
    Axios.get(`http://localhost:5001/device/${id}`).then((response) => {
      setUpdateDeviceId(response.data[0]);
    });
  }

  const handleUpdateDeviceInfo = (id) => {
    setModalActive(true);
    getUpdateDeviceInfo(id);
  };

  return (
    <div className="device-search">
      <Modal visible={modalActive} setVisible={setModalActive}>
        <UpdateDeviceForm
          updateInfo={updateDeviceId}
          modal={setModalActive}
          devices={devices}
          setDevices={setDevices}
        />
      </Modal>
      {/* <SearchData
        placeholder="Поиск..."
        value={searchQuery}
        onChange={handleChange}
        statusInput={searchQuery.length}
        deleteSearchquery={handleDeleteInputQuery}
      /> */}
      <DeviceLists
        update={handleUpdateDeviceInfo}
        remove={removeDevice}
        title="Список устройств"
        devices={filterData}
      />
      <Pagination
        devicesPerPage={devicesPerPage}
        totalDevices={devices.length}
        paginate={pageNumberHandler}
        currentPage={currentPage}
      />
    </div>
  );
};

export default DeviceSearch;
