import React from "react";

const DeviceLists = ({ devices, title, remove, update }) => {


  return (
    <div>
      <div className="title">{title}</div>
      <table className="devices-table">
              <thead>
                  <tr>
                      <th>Тип устройства</th>
                      <th>Название</th>
                      <th>Серийный номер</th>
                      <th>Пользователь</th>
                      <th>Дата добавления</th>
                      <th></th>
                      <th></th>
                  </tr>
              </thead>
              <tbody>
                  {devices.map((device, index) => (
                      <tr key={index}>
                          <td>{device.deviceType}</td>
                          <td>{device.deviceName}</td>
                          <td>{device.deviceNumber}</td>
                          <td>{device.userName}</td>
                          <td>{device.deviceAddTime}</td>
                          <td><button className="delete-btn" title="Удалить" onClick={() => remove(device._id)}>
        <i className="bi bi-trash3"></i>
      </button></td>
                          <td><button className="update-btn" title="Обновить" onClick={() => update(device._id)}>
      <i className="bi bi-arrow-repeat"></i>
      </button></td>
                      </tr>
                  ))}
              </tbody>
          </table>
    </div>
  );
};

export default DeviceLists;
