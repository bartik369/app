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
          <table className="last-devices-table">
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
                          <td>{device.name}</td>
                          <td>{device.number}</td>
                          <td>{device.user}</td>
                          <td>{device.addTime}</td>
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