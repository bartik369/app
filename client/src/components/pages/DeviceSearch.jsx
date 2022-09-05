import React, { useEffect, useState } from "react";
import DeviceLists from "../DeviceLists";
import Modal from "../UI/modal/Modal";
import UpdateDeviceForm from "../form/UpdateDeviceForm";
import Pagination from "../UI/pagination/Pagination";
import '../../styles/App.css'
import AddDeviceForm from "../form/AddDeviceForm";
import { useDispatch, useSelector } from "react-redux";
import { addDevice, deleteDevice, getsingleDevice, loadDevices } from "../../store/actions/devicesActions";
import { updateModal } from "../../store/actions/modalActions";

const DeviceSearch = ({
  searchQuery, 
  setPageName,
  modalActive, 
  setModalActive}) => {

  let dispatch = useDispatch();
  const {devices} = useSelector(state => state.devices);
  const modal = useSelector(state => state.modal);

  // const [updateDeviceId, setUpdateDeviceId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [devicesPerPage] = useState(25);

  useEffect(() => {
    dispatch(loadDevices());
  }, [setPageName])

  // Pagination

  const indexOfLastDevice = currentPage * devicesPerPage;
  const indefOfFirstDevice = indexOfLastDevice - devicesPerPage;

  // Search device

  const filterData = devices.filter((item) => {
      return Object.keys(item).some((key) =>
        String(item[key]).toLowerCase().includes(searchQuery.toLowerCase())
      );
    }).slice(indefOfFirstDevice, indexOfLastDevice);

  const pageNumberHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  setPageName('deviceSearhPage');

  // Delete device

  function removeDevice(id) {
    dispatch(deleteDevice(id));
  }

  // Update device
  
  const handleUpdateDeviceInfo = (id) => {
    dispatch(updateModal(true))
    dispatch(getsingleDevice(id));
  };

  // Create device

  function createNewDevice(newDevice) {
    dispatch(addDevice(newDevice));
  }

  return (
    <div className="content-container__inner">
      <Modal active={modal.update}>
        <UpdateDeviceForm
          modal={setModalActive}
        />
      </Modal>
      <div className="devices-list">
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
      <div className="add-device-block">
        <AddDeviceForm create={createNewDevice}/>
      </div>
    </div>
  );
};

export default DeviceSearch;
