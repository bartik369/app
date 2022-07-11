import React from "react";
import "../widgets/widgets.css";

const Homepage = ({ devices, todos }) => {
  const arrayDevices = [...devices];
  const arrayTodos = [...todos]
  const dateNow = new Date().toLocaleString('ru-RU');
  const reverseArrayDevices = arrayDevices.reverse().slice(0, 8);

  return (
    <div className="home-wrapper">
      <div className="top-side">
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
        <div className="widget-item">
          <div className="widget-item__title">Срочно выполнить</div>
          <table className="widget-table">
              <thead>
                  <tr>
                      <th>Название</th>
                      <th>Начать</th>
                      <th>Закончить</th>
                  </tr>
              </thead>
              <tbody>
                  {arrayTodos.map((todo, index) => (
                      todo.endTime <= dateNow
                      ?
                      <tr key={index}>
                          <td>{todo.title}</td>
                          <td>{todo.startTime}</td>
                          <td>{todo.endTime}</td>
                      </tr>
                      : ""
                  ))}
              </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Homepage;