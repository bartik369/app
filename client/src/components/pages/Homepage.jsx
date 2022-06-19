import React from "react";
import "../widgets/widgets.css";

const Homepage = ({ devices, todos }) => {
  const arrayDevices = [...devices];
  const arrayTodos = [...todos]
  const reverseArrayDevices = arrayDevices.reverse().slice(0, 8);
  const reverseArrayTodos = arrayTodos.reverse().slice(0, 5);

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
        <div className="widget-item">
          <div className="widget-item__title">Последние задачи</div>
          {reverseArrayTodos.map((todo, index) => (
            <div key={index}>
              {todo.title}
              {todo.startTime}
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;