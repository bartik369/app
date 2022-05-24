import React from "react";
import "../widgets/widgets.css";

const Homepage = ({ devices }) => {
  const array = [...devices];
  const reverseArray = array.reverse().slice(0, 8);

  return (
    <div className="home-wrapper">
      <div className="top-side">
        <div className="widget-item">
          <div className="widget-item__title">Последние добавленные</div>
          <table>
              <thead>
                  <tr>
                      <th>Модель устройства</th>
                      <th>Номер</th>
                      <th>Пользователь</th>
                      <th>Дата</th>
                  </tr>
              </thead>
              <tbody>
                  {reverseArray.map((device, index) => (
                      <tr key={index}>
                          <td>{device.deviceName}</td>
                          <td>{device.deviceNumber}</td>
                          <td>{device.userName}</td>
                          <td>{device.deviceAddTime}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

{
  /* <LastAddDevices /> */
//   {reverseArray.map((device) => (
//     <LastAddDevices device={device} key={device.id} />
//   ))}
}
