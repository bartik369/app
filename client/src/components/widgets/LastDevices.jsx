import React from "react";
import "../widgets/widgets.css";

const LastDevices = ({devices}) => {
    const arrayDevices = [...devices];
    const reverseArrayDevices = arrayDevices.reverse().slice(0, 5);
    return (
        <div className="widget-item">
          <div className="widget-item__title">Последние добавленные</div>
          <table className="widget-table">
              <thead>
                  <tr>
                      <th>Модель устройства</th>
                      <th>Номер</th>
                      <th>Пользователь</th>
                      <th>Дата</th>
                  </tr>
              </thead>
              <tbody>
                  {reverseArrayDevices.map((device, index) => (
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
    )
}

export default LastDevices;